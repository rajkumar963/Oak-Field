import {test,expect} from '@playwright/test';
import {articles} from '../src/lib/content';
const routes=['/','/who-we-are','/our-research','/tech-blog','/news-insights','/join-our-team','/enquiries','/privacy','/terms','/disclosures',...articles.map(a=>`/${a.section}/${a.slug}`)];
test('every page renders without errors, broken internal links, or horizontal overflow',async({page},testInfo)=>{
  const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  const links=new Set<string>();
  for(const route of routes){
    const response=await page.goto(route);expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);await expect(page.locator('h1')).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),`${route} fits viewport`).toBe(true);
    for(const href of await page.locator('a[href^="/"]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')!)))links.add(href);
    await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,70));}window.scrollTo({top:0,behavior:'instant'})});
    await page.screenshot({path:`test-results/screenshots/${testInfo.project.name}-${route==='/'?'home':route.replaceAll('/','-')}.png`,fullPage:true,animations:'disabled'});
  }
  for(const href of links){const response=await page.request.get(href);expect(response.status(),href).toBe(200);}
  expect(errors).toEqual([]);
});
test('research steps support selection and keyboard navigation',async({page})=>{
  await page.goto('/our-research');await page.getByRole('tab',{name:'03 Model'}).click();
  await expect(page.getByRole('tabpanel')).toContainText('Make the assumptions explicit.');
  await page.getByRole('tab',{name:'03 Model'}).press('ArrowRight');
  await expect(page.getByRole('tabpanel')).toContainText('Test beyond the familiar.');
});
test('article search, category filter, empty state, and detail work',async({page})=>{
  await page.goto('/tech-blog');await page.getByRole('button',{name:'Data science',exact:true}).click();
  await expect(page.locator('.article-card')).toHaveCount(1);
  await page.getByRole('searchbox',{name:'Search articles'}).fill('no matching result');
  await expect(page.getByText('No notes found.')).toBeVisible();
  await page.getByRole('button',{name:'Clear filters'}).click();await expect(page.locator('.article-card')).toHaveCount(2);
  await page.getByRole('searchbox',{name:'Search articles'}).fill('repeatable');
  await page.locator('.article-card').click();await expect(page.locator('h1')).toHaveText('Good research should be repeatable.');
});
test('form validates, preserves data, and reports unavailable delivery honestly',async({page})=>{
  await page.goto('/enquiries?category=careers');await expect(page.getByLabel('What would you like to discuss?')).toHaveValue('Careers');
  await page.getByRole('button',{name:'Send enquiry'}).click();await expect(page.getByText('Please enter your name (at least 2 characters).')).toBeVisible();
  await page.getByLabel('Your name').fill('Test Researcher');await page.getByLabel('Email address').fill('test@example.com');await page.getByLabel('Your message').fill('A test enquiry about research collaboration and reproducible systems.');await page.getByRole('checkbox').check();
  await page.waitForTimeout(2100);await page.getByRole('button',{name:'Send enquiry'}).click();
  await expect(page.locator('.contact-form').getByRole('alert')).toContainText('Your message has not been sent or saved');await expect(page.getByLabel('Your name')).toHaveValue('Test Researcher');
});
test('mobile menu opens, navigates, and closes with Escape',async({page},testInfo)=>{
  test.skip(testInfo.project.name!=='mobile');await page.goto('/');await page.getByRole('button',{name:'Menu'}).click();await expect(page.getByRole('navigation',{name:'Main navigation'})).toBeVisible();
  await page.getByRole('button',{name:'Close'}).press('Escape');await expect(page.getByRole('button',{name:'Menu'})).toBeFocused();
  await page.getByRole('button',{name:'Menu'}).click();await page.getByRole('navigation').getByRole('link',{name:'Our research'}).click();await expect(page.locator('h1')).toHaveText('Understanding begins with a question.');await expect(page.getByRole('button',{name:'Menu'})).toHaveAttribute('aria-expanded','false');
});
test('reduced motion exposes content and unknown routes return 404',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');expect(await page.locator('.tree-leaves').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
  expect((await page.goto('/missing-page'))?.status()).toBe(404);
});

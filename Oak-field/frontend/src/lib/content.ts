export type MenuIcon = 'leaf' | 'rings' | 'people' | 'envelope' | 'notes' | 'code' | 'sprout';
export type NavMenu =
  | { kind: 'links'; items: { title: string; text: string; href: string; icon: MenuIcon }[] }
  | { kind: 'feature'; visual: 'rings' | 'grove'; title: string; text: string; cta: { label: string; href: string }; secondary?: { label: string; href: string } };
export const navigation: { label: string; href: string; menu?: NavMenu }[] = [
  { label: 'Who we are', href: '/who-we-are', menu: { kind: 'links', items: [
    { title: 'About', text: 'A quantitative research firm. Complex questions deserve careful, collaborative thinking.', href: '/who-we-are', icon: 'leaf' },
    { title: 'Principles', text: 'Intellectual honesty, collective understanding, care in the details.', href: '/who-we-are#principles', icon: 'rings' },
    { title: 'The people', text: 'Different disciplines. One conversation.', href: '/who-we-are#people', icon: 'people' },
    { title: 'Contact us', text: 'A conversation is a good beginning.', href: '/enquiries', icon: 'envelope' },
  ] } },
  { label: 'Our research', href: '/our-research', menu: { kind: 'feature', visual: 'rings', title: 'Inside our process', text: 'From an observation to a better understanding—ask, understand, model, challenge, implement, revisit.', cta: { label: 'Learn more', href: '/our-research' } } },
  { label: 'News & insights', href: '/news-insights', menu: { kind: 'links', items: [
    { title: 'News & insights', text: 'Perspectives on research, technology, and the way we think.', href: '/news-insights', icon: 'notes' },
    { title: 'Tech blog', text: 'Notes on the craft behind the research.', href: '/tech-blog', icon: 'code' },
    { title: 'Latest note', text: 'The value of a better question.', href: '/news-insights/the-value-of-a-better-question', icon: 'sprout' },
  ] } },
  { label: 'Join our team', href: '/join-our-team', menu: { kind: 'feature', visual: 'grove', title: 'Bring your curiosity', text: 'Space to think, and people to think with. For those who enjoy the difficult question.', cta: { label: 'Find your place', href: '/join-our-team' }, secondary: { label: 'Introduce yourself', href: '/enquiries?category=careers' } } },
  { label: 'Enquiries', href: '/enquiries' },
];
export const footerColumns: { title: string; links: { label: string; href: string; icon?: 'linkedin' | 'envelope'; external?: boolean }[] }[] = [
  { title: 'Explore', links: [{ label: 'Who We Are', href: '/who-we-are' }, { label: 'Our Research', href: '/our-research' }, { label: 'News & Insights', href: '/news-insights' }, { label: 'Join Our Team', href: '/join-our-team' }, { label: 'Enquiries', href: '/enquiries' }] },
  { title: 'Company', links: [{ label: 'About Oak Field', href: '/who-we-are' }, { label: 'Our People', href: '/who-we-are#people' }, { label: 'Our Philosophy', href: '/who-we-are#principles' }] },
  // LinkedIn: set NEXT_PUBLIC_LINKEDIN_URL to the company page before launch.
  { title: 'Connect', links: [{ label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/', icon: 'linkedin', external: true }, { label: 'Contact', href: '/enquiries', icon: 'envelope' }] },
];
export const legalLinks = [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms', href: '/terms' }, { label: 'Legal / Disclaimer', href: '/disclosures' }, { label: 'Sitemap', href: '/sitemap.xml' }];
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export type Article = { slug: string; title: string; category: string; section: 'tech-blog' | 'news-insights'; date: string; minutes: number; summary: string; visual: 'waves' | 'grid' | 'rings'; paragraphs: { heading: string; text: string }[] };
export const articles: Article[] = [
  { slug: 'the-value-of-a-better-question', title: 'The value of a better question.', category: 'Perspectives', section: 'news-insights', date: '2026-09-10', minutes: 4, summary: 'Why the most useful research often begins by looking at a familiar problem differently.', visual: 'rings', paragraphs: [
    { heading: 'Before the model', text: 'A research question makes an idea testable. Before choosing a method, it helps to state what we expect to observe, what evidence would change our view, and what a useful answer would look like. These choices shape every step that follows.' },
    { heading: 'Make room for a different answer', text: 'An experiment is more informative when it can challenge its starting premise. Writing down alternative explanations before examining results makes it easier to distinguish an interesting pattern from a convincing explanation.' },
    { heading: 'Clarity is a research tool', text: 'A precise question is easier to share, reproduce, and critique. The goal is not to eliminate uncertainty. It is to make uncertainty visible enough that the next experiment has a clear purpose.' } ] },
  { slug: 'building-for-reproducibility', title: 'Good research should be repeatable.', category: 'Engineering', section: 'tech-blog', date: '2026-09-03', minutes: 6, summary: 'A practical look at the systems that make experiments easier to trust, revisit, and improve.', visual: 'grid', paragraphs: [
    { heading: 'An experiment is more than its code', text: 'Reproducing a result requires the data, configuration, dependencies, and evaluation procedure that produced it. A useful experiment record connects these pieces, so another researcher can understand the conditions behind an observation.' },
    { heading: 'Keep the record close to the work', text: 'Versioned inputs and explicit configuration reduce hidden assumptions. Small, well-defined interfaces help separate data preparation from modelling and evaluation. When an experiment changes, its record should make that change easy to inspect.' },
    { heading: 'Design for the next reader', text: 'Useful research infrastructure serves the person returning to an experiment months later. Clear naming, recorded limitations, and a short explanation of the original question can matter as much as sophisticated tooling.' } ] },
  { slug: 'learning-from-uncertainty', title: 'Learning from uncertainty.', category: 'Research notes', section: 'news-insights', date: '2026-08-21', minutes: 5, summary: 'What changes when uncertainty becomes part of the question, rather than an afterthought.', visual: 'waves', paragraphs: [
    { heading: 'A result has a context', text: 'A model offers a simplified view of a changing world. Its usefulness depends on the observations, assumptions, and conditions behind it. Examining those conditions is part of understanding the result itself.' },
    { heading: 'Look beyond an average', text: 'An aggregate measure can hide variation between periods or environments. Studying where a method behaves differently can reveal more than a single summary. It also helps identify which questions remain open.' },
    { heading: 'Keep evaluating', text: 'Evaluation is an ongoing practice. New observations provide opportunities to revisit assumptions, investigate unexpected behaviour, and decide whether a method still answers the question it was built to address.' } ] },
  { slug: 'from-data-to-an-experiment', title: 'From data to a useful experiment.', category: 'Data science', section: 'tech-blog', date: '2026-08-14', minutes: 5, summary: 'How careful data boundaries and simple baselines make a better starting point.', visual: 'waves', paragraphs: [
    { heading: 'Start with the boundaries', text: 'An experiment needs a clear separation between information available at the time of a decision and information that arrives later. Recording timestamps, transformations, and data availability helps make this distinction explicit.' },
    { heading: 'Give complexity something to beat', text: 'A simple baseline provides a useful reference. More elaborate methods should justify their additional assumptions and operational burden. An experiment that finds no improvement can still produce valuable understanding.' },
    { heading: 'Write down what you learned', text: 'Record the question, the method, the outcome, and the limitations. This makes a result useful to the next person and helps a sequence of experiments accumulate into shared knowledge.' } ] },
];
export const steps = [
  { title: 'Ask', subtitle: 'Start with a clear question.', description: 'Turn an observation into a testable hypothesis. Define what evidence would support it—and what would make us reconsider.', note: 'Observation → hypothesis' },
  { title: 'Understand', subtitle: 'Know the data behind the idea.', description: 'Examine provenance, quality, and timing. Understand what a dataset can tell us, and where its limits begin.', note: 'Raw observations → context' },
  { title: 'Model', subtitle: 'Make the assumptions explicit.', description: 'Build a useful abstraction. Begin with a simple baseline and add complexity only when the evidence justifies it.', note: 'Hypothesis → representation' },
  { title: 'Challenge', subtitle: 'Test beyond the familiar.', description: 'Evaluate across unseen observations and changing conditions. Look closely at failure, sensitivity, and alternative explanations.', note: 'Experiment → evidence' },
  { title: 'Implement', subtitle: 'Connect research and engineering.', description: 'Translate a research idea into a reproducible system with clear interfaces, observability, and deliberate controls.', note: 'Evidence → system' },
  { title: 'Revisit', subtitle: 'Keep asking what has changed.', description: 'Monitor behaviour, revisit assumptions, and use new observations to guide the next question. Research is a continuing process.', note: 'New observations → new questions' },
];

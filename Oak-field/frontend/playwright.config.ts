import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir:'./tests', fullyParallel:false, workers:1, reporter:'list',
  use:{baseURL:'http://localhost:3000',channel:'chrome',trace:'retain-on-failure'},
  projects:[{name:'desktop',use:{...devices['Desktop Chrome'],viewport:{width:1440,height:1000}}},{name:'mobile',use:{...devices['iPhone 13'],defaultBrowserType:'chromium',channel:'chrome'}}],
  webServer:{command:'npm.cmd run start',url:'http://localhost:3000',reuseExistingServer:!process.env.CI,timeout:60000},
});

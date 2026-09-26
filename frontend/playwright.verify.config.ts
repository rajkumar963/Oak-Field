import base from './playwright.config';
import { defineConfig } from '@playwright/test';
export default defineConfig({ ...base, timeout: 180000, use: { ...base.use, baseURL: 'http://localhost:3100' }, webServer: { command: 'npx next start -p 3100', url: 'http://localhost:3100', reuseExistingServer: false, timeout: 60000 } });

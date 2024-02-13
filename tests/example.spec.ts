import path from 'path';
import { test, expect } from '@playwright/test';

test('example', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveScreenshot({
    stylePath: path.join(__dirname, "screenshot.css") // BUG: Playwright incorrectly ignores this parameter!
  });
});

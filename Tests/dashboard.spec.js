import { test, expect } from '@playwright/test';
test.describe('dashboard', () => {
    test('should display dashboard elements', async ({ page }) => {
        try {
        await page.goto('https://practicetestautomation.com/practice-test-login/')
await page.locator("#username").fill('student');
await page.locator("#password").fill('Password');
await page.locator("#submit").click();

await page.waitForTimeout(5000);

await page.locator("#imenu-item-20").click();
}
catch(error)
{
    console.error('Error during dashboard test:', error);
}
})})
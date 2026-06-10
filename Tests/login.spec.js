import {test, expect} from '@playwright/test'
test.describe('login',()=>{
    
    test('should login with valid credentials', async ({page}) => {

        try{
await page.goto('https://practicetestautomation.com/practice-test-login/')
await page.locator("#username").fill('student');
await page.locator("#password").fill('Password123');
await page.locator("#submit").click();

await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
console.log('Login test passed!');
await page.waitForTimeout(5000);
}
catch(error)
{
    console.error('Error during login test:', error);
}})})

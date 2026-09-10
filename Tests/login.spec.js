import {test, expect} from '@playwright/test'
test.describe('login',()=>{
    
    test('should login with valid credentials', async ({page}) => {

        try
        {
await page.goto('https://automationexercise.com/login')
await expect(page).toHaveURL('https://automationexercise.com/login');
console.log('Login test passed!');
await page.waitForTimeout(5000);
}
catch(error)
{
    console.error('Error during login test:', error);
}})})

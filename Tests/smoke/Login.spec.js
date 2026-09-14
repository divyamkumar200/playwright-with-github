import { test, expect } from '@playwright/test';

test('login functionality',{tag:['@smoke']},async({page})=>{


    await page.goto("https://www.google.com");
    await page.waitForTimeout(5000);
    console.log("smoke is running");

    
})

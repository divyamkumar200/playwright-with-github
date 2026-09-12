import { test, expect } from '@playwright/test';

test('dashboard visiblity',async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/")

 console.log("site is visible");
 await page.waitForTimeout(5000);


  
  
 
  

  })

test("pratice test",async({page})=>{

    const modal=await page.locator(".modal");
    await page.getbyrole("button",{name:close})

    if((modal).tobevisible())
    {
        console.log("modal is visible");
    expect(modal).tohaveText("do you want to delete");
    modal.getbyrole("button",{name:yes}).click(); 
     

}
else {
    console.log("modal is not not visible")
}
    
    









})
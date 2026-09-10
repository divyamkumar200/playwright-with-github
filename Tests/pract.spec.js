test("toast test",async({page})=>{

const deletebtn =await page.getbyrole("button",{"name":"delete"})
const toast= await page.locator(".toast");
await deletebtn.click();
if(toast.isvisible()){

    console.log(("toast is visible"));
    expect(toast).tohaveText("do you want to delete?")
    toast.getbyrole("button",{"name":"confirm"}).click();

}
else {

    console.log("toast is not visible");
}


})
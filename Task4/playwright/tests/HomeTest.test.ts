// import {chromium, expect, Page, test} from "@playwright/test";
// import AllureReporter, { allure } from "allure-playwright";
// import basicMethods from "../Basic/basicMethods";
// import loginPage from "../pages/loginPage.page";
// import Env from "../utils/enviornment";

import test from "../Basic/BaseTest"
import Env from "../utils/enviornment";

// // declare let page;

// test.describe ("launch browser from 2nd test" , () =>{

//     //pages
//     let loginObj: loginPage;
//     let basicMethod: basicMethods
//     let page;
//     let context;

// test.beforeAll(async ({ browser })=>{
//     context = await browser.newContext();
//     page = await context.newPage();
//     loginObj= new loginPage(page);
//     basicMethod= new basicMethods(page);
// })

//     test("open Facebook URL and Login from 2nd test", async() => {
//         allure.description("Opening facebookPage");
//         await basicMethod.open_url();
//         await loginObj.login(Env.username, Env.password);
//         // await expect(page.url()).toBe("https://web.facebook.com/");
//         })

//   test.afterAll(async({browser})=>{
//       context.close();
//       page.close();
//   })      
// })

// test("verifyig home button on home page", async({ home_page_obj })=>{

//     home_page_obj.verifyHomeDisplayed();

// })


// test("open Facebook URL and Login to application to verify the homeButton", async({ login_page_obj, basic_method_obj, home_page_obj }) => {
//     // // allure.description("Opening facebookPage");
//     await basic_method_obj.open_url();
//     await login_page_obj.login(Env.username, Env.password);
//     })
//     // await test.step('Navigate to Application', async () => {
//     //     await basic_method_obj.open_url();
//     // });
//     // await test.step('Login to the application', async () => {
//     //     await login_page_obj.login(Env.username, Env.password);
//     // });
//     // await test.step('Verifying home button on Home page', async () => {
//     //     await home_page_obj.verifyHomeDisplayed();
//     // });
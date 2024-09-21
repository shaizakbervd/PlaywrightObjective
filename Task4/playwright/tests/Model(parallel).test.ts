import {chromium, expect, Page} from "@playwright/test";

import Env from "../utils/enviornment";
import test from "../Basic/BaseTest"
import { HomePageObject } from "../pages/pageObjects/homePageObject";
import homePage from "../pages/homePage.page";
import AllureReporter from "experimental-allure-playwright";




// test.describe("Demo Tests" , () =>{
// test.describe.only("Demo Tests" , () =>{
// test.describe.only("Demo Tests" , () =>{


test.describe("Demo Tests @smoketest" , () =>{



    test("Verify correct item in cart", async({ home_page_obj }) => {
        
        await test.step('I open JPetstore', async () => {
                await home_page_obj.goTo();
            });
            await test.step('I select category', async () => {
                await home_page_obj.categ_1(); 
            });
            await test.step('I select first product', async () => {
                await home_page_obj.prod_1();
            });
            await test.step('I add to cart the product', async () => {
                await home_page_obj.add_to_cart()
            });
            await test.step('I verify item as "Large Angelfish"', async () => {
                await home_page_obj.check_text('Large Angelfish');
            });
            
    })
    })

test.describe.parallel("Check registration page",()=>{

    test("I register", async({ login_page_obj, home_page_obj },testInfo) => {

    await test.step('I go tp JPetstore', async () => {

    await home_page_obj.goTo();
    });
    await test.step('I click on signIn', async () => {
    await login_page_obj.signIn()
    })
    await test.step('I click on register now', async () => {
    await login_page_obj.registerNow();
    });
    await test.step('I enter "King" as ID', async () => {
    await login_page_obj.id("king");
    });
    await test.step('I enter new password', async () => {
    await login_page_obj.newPassword('pakistan');
    });
    await test.step('I enter repeat password as "pakistan"', async () => {
    await login_page_obj.repeatPassword('pakistan');
    });
    await test.step('I click on save info', async () => {
    await login_page_obj.save_info();
    });
    await test.step('I verify "500" on page', async () => {
    await login_page_obj.verify_error('500');
    });
    


})
})
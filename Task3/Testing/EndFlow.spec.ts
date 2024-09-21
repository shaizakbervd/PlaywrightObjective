import { test, expect, Page, Locator } from "@playwright/test";
import { PageObjectManager } from '../PageObjects/PageObjectManager';
import { chromium, Browser } from 'playwright';

const Testdata = require("../Utils/Testdata.json");

let browser: Browser;
let page: Page;
let pomanager: PageObjectManager;

test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();

    pomanager = new PageObjectManager(page);

    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState("domcontentloaded");
});

test.afterAll(async () => {
    await browser.close();
});

test("Enter Valid username and invalid password", async () => {

    const loginpage = pomanager.GetLoginPage()
    await loginpage.Login(Testdata[0].uname, Testdata[0].pwd);
    await loginpage.Validation_Error()
});

test("Enter Valid username and valid password", async () => {

    const loginpage = pomanager.GetLoginPage()
    await loginpage.Login(Testdata[1].uname, Testdata[1].pwd);

    const inventorypg = pomanager.GetInventoryPage();
    inventorypg.Validate_Products_Displayed();

});

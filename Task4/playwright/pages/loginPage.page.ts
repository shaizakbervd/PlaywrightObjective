import { expect, Page } from "@playwright/test";
import Env from "../utils/enviornment";
import { WebActions } from "../utils/WebActions";
import { LoginPageObjects } from "./pageObjects/loginPageObjects";

let webActions: WebActions;

export default class loginPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    loginPageObjects = new LoginPageObjects();

   

    public async Enter_id(username) {
        await webActions.enterElementText(this.loginPageObjects.UserName,username);
    }

    public async Enter_Password(pwd) {
        await webActions.enterElementText(this.loginPageObjects.Password, pwd);
    }

    // public async repeatPassword(pass) {
    //     await webActions.enterElementText(this.loginPageObjects.repeatPassword, pass);
    // }


    public async LoginBtn(){
        await webActions.clickElement(this.loginPageObjects.Loginbtn);
    }

    // public async registerNow(){
    //     await webActions.clickElement(this.loginPageObjects.registerNow);
    // }

    // public async verify_error(error){
    //     const locator = this.page.locator(this.loginPageObjects.error);
    //     await expect(locator).toContainText(error);

    // }

    // public async save_info(){
    //     await webActions.clickElement(this.loginPageObjects.save_info);
    // }

    
}


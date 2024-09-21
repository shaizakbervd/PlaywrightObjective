import {test, expect, Page, Locator} from "@playwright/test"
import { Enter_Values } from "../Utils/GenericUtils"

export class LoginPage{

    page:Page;
    UserName:Locator;
    Password:Locator;
    SignInButton:Locator;
    errorLocator:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.UserName = page.locator("input[placeholder='Username']");
        this.Password = page.locator("input[placeholder='Password']");
        this.SignInButton = page.locator("input[data-test='login-button']");
        this.errorLocator  = page.getByText('Epic sadface', { exact: false });
    }

    async Login(username:string, password:string)
    {
        await Enter_Values(this.UserName, username);
        await Enter_Values(this.Password, password);
        await this.SignInButton.click();
    }

    async Validation_Error()
    {
        this.errorLocator.waitFor();
        await expect(this.errorLocator).toBeVisible();
    }

}
module.exports={LoginPage}
import { InventoryPage } from "./InventoryPage";
import {LoginPage} from "./LoginPage"
import { Page } from "@playwright/test"


export class PageObjectManager{

    page:Page
    loginpage:LoginPage;
    inventorypage:InventoryPage;

    constructor(page:Page)
    {
        this.page=page;
        this.loginpage = new LoginPage(page);
        this.inventorypage = new InventoryPage(page);
      
    }

    GetLoginPage()
    {
        return this.loginpage;
    }

    GetInventoryPage()
    {
        return this.inventorypage;
    }

}

module.exports={PageObjectManager}
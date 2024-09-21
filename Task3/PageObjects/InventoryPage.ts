import {test, expect, Page, Locator} from "@playwright/test"
import { Enter_Values } from "../Utils/GenericUtils"
import exp from "constants";

export class InventoryPage{

    page:Page;
    products:Locator;

    constructor(page:Page)
    {
        this.page=page;        
    }

    async Validate_Products_Displayed()
    {
        const url = this.page.url();
        expect(url).toContain("inventory");
    }

}
module.exports={InventoryPage}
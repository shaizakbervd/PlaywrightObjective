import { expect } from '@playwright/test';
import Env from "../utils/enviornment";
import test from "../Basic/BaseTest"
import homePage from "../pages/homePage.page";
import AllureReporter from "experimental-allure-playwright";



test.beforeEach(async ({ page, home_page_obj, login_page_obj }) => {
    await home_page_obj.goTo();
    await home_page_obj.SignIn();

    await login_page_obj.Enter_id("shaiz");
    await login_page_obj.Enter_Password("vivov11pro");
    await login_page_obj.LoginBtn();
});

test.afterEach(async ({ page, home_page_obj, login_page_obj, cart_page_obj }) =>{
    await home_page_obj.Navigate_Cart();
    await cart_page_obj.Delete_Items();
})



test("Scenario 1: Add DOVE items", async ({page, home_page_obj, login_page_obj, cart_page_obj})=>{

    await home_page_obj.Navigate_Dove_Items();
    await home_page_obj.Add_Dove_Products();
    await home_page_obj.Navigate_Cart();
    
    await cart_page_obj.Assert_Qty_Price_Dove("$7.20", "1");
});

test("Scenario 2: Selecting top 3 lowest value Products & Add highest value shoe product", async ({page, home_page_obj, login_page_obj, cart_page_obj})=>{

    var tshirt = 3;
    var shoe = 1;
    await home_page_obj.Navigate_ApparelSection();
    await home_page_obj.Navigate_Tshirts();

    await home_page_obj.selectSortOption("p.price-ASC");

    await home_page_obj.Add_ProductOnCount(tshirt);

    await home_page_obj.Navigate_ApparelSection();

    await home_page_obj.Navigate_Shoes()

    await home_page_obj.selectSortOption("p.price-DESC");
    await home_page_obj.Add_ProductOnCount(shoe);

    await home_page_obj.Navigate_Cart();

    await cart_page_obj.Assert_Added_Products(3);

});

test("Scenario 3: Log the items of Skin Care which are either on sale or sale & out of stock", async ({page, home_page_obj, login_page_obj, cart_page_obj})=>{
    
    await home_page_obj.Navigate_SkinCare();
    await home_page_obj.Count_Skincare_SaleItems();

    await home_page_obj.Add_Saleitem_SkinCare();

    await home_page_obj.Navigate_Cart();
    await cart_page_obj.Assert_Added_Products(2);

});

test("Scenario 4: Add the Men products whose name ends with M", async ({page, home_page_obj, login_page_obj, cart_page_obj})=>{
    
    await home_page_obj.Navigate_Men();

    await home_page_obj.Add_Products_Ending_Letter("M");

    await home_page_obj.Navigate_Cart();
    await cart_page_obj.Assert_Product_EndingLetter("M");

});
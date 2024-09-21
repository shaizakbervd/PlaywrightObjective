import { test as baseTest } from '@playwright/test';

import homePage from '../pages/homePage.page';
import loginPage from '../pages/loginPage.page';

import basicMethods from './basicMethods';
import cartPage from '../pages/cartPage.page';


const test = baseTest.extend<{
    login_page_obj: loginPage;
    basic_method_obj: basicMethods;
    home_page_obj: homePage;
    cart_page_obj: cartPage

}>({
    login_page_obj: async ({ page }, use) => {
        await use(new loginPage(page));
    },
    basic_method_obj: async({page}, use)=>{
        await use(new basicMethods(page));
    },
    home_page_obj: async({page}, use) =>{
        await use(new homePage(page));
    },
    cart_page_obj: async ({page}, use)=>{
        await use(new cartPage(page));
    }
});

export default test;
import { Page } from "@playwright/test";
import Env from "../utils/enviornment";

export default class basicMethods {

    public page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async open_url (url: string){
        await this.page.goto(url)
    }

}
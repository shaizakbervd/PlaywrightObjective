"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageObjectManager = void 0;
var InventoryPage_1 = require("./InventoryPage");
var LoginPage_1 = require("./LoginPage");
var PageObjectManager = /** @class */ (function () {
    function PageObjectManager(page) {
        this.page = page;
        this.loginpage = new LoginPage_1.LoginPage(page);
        this.inventorypage = new InventoryPage_1.InventoryPage(page);
    }
    PageObjectManager.prototype.GetLoginPage = function () {
        return this.loginpage;
    };
    PageObjectManager.prototype.GetInventoryPage = function () {
        return this.inventorypage;
    };
    return PageObjectManager;
}());
exports.PageObjectManager = PageObjectManager;
module.exports = { PageObjectManager: PageObjectManager };

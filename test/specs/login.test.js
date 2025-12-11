const LoginPage = require('../pajeobjects/login.page');
const InventoryPage = require('../pajeobjects/inventory.page');

describe('SauceDemo Login Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.inventoryContainer).toBeDisplayed();
    });
});

describe('Login negative test', () => {
    it('should not login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('wrong_user', 'wrong_pass');
        await expect(LoginPage.errorMessage).toBeDisplayed();
    });
});

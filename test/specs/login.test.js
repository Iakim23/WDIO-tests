const LoginPage = require('../pajeobjects/login.page');
const InventoryPage = require('../pajeobjects/inventory.page');
const data = require('../data/login.data');

describe('SauceDemo Login Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(data.validLogin.username, data.validLogin.password);
        await expect(InventoryPage.inventoryContainer).toBeDisplayed();
    });
});

describe('Login negative test', () => {
    data.invalidLogins.forEach((set) => {
        it(`should not login with invalid credentials: ${set.username} / ${set.password}`, async () => {
            await LoginPage.open();
            await LoginPage.login(set.username, set.password);
            await expect(LoginPage.errorMessage).toBeDisplayed();
        });
    });
});

// Для проверки browser.saveScreenshot
// it('should fail', async () => {
//     expect(1).toBe(2);
// });


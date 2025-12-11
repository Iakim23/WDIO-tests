describe('SauceDemo Login Test', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Ждём появления заголовка, затем проверяем текст
        await $('.title').waitForDisplayed();
        await expect($('.title')).toHaveText('Products');
    });
});
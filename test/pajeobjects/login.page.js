class LoginPage {
    // === Локаторы ===
    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('.error-message-container');
    }

    // === Методы страницы ===

    /**
     * Открыть страницу логина
     */
    async open() {
        await browser.url('/');
    }

    /**
     * Выполнить логин с любыми данными
     */
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();

import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {
    // 1. whenever we are creating any page locators it should be private

    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly forgottenPasswordLink: Locator;
    private readonly loginErrorMessage: Locator;

    // 2. constructor of the page class: initialize the locators

    constructor(page: Page) {
        super(page);
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' }); // this is used to access the current class property
        this.password = page.getByRole('textbox', { name: 'Password' });// here page is coming from the BasePage, inheritance
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.forgottenPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.loginErrorMessage = page.locator('.alert.alert-danger.alert-dismissible'); // CSS

    }

    // maintain the locators and initialize the locators inside the constructor

    // 3.
    // this.page is coming from BasePage (inheritance)
    async goToLoginPage(): Promise<void> {
        await this.page.goto('opencart/index.php?route=account/login');// Base URL will maintain somewhere else
        // Here we are maintaing only path parameter (after the domain name part). We are not maintaining domain name here
        // because it might change in another enviroment/ multiple environment like dev, stage, qa        
//      In the goto() method, if we supply partial URL, it will take the base URL from playwright.config.ts file
    }

    // async getLoginPageTitle(): Promise<string> {
    //     return await this.page.title();
    // }

    async isForgottenPwdLinkExist(): Promise<boolean> {
        return await this.forgottenPasswordLink.isVisible();
    }

    async doLogin(username: string, password: string): Promise<void> {
        console.log(`user creds: ${username} - ${password}`);
        await this.emailId.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async isInvalidLoginErrorDisplayed(): Promise<boolean> {
        return await this.loginErrorMessage.isVisible();
    }

}
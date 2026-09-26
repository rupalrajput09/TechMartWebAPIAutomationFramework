// // page is the page object of the browser window. Which is coming from browser, playwright is giving to me. 
// // But in playwright term page is the in-built fixture.

// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../src/pages/LoginPage'; // relative path
// import { HomePage } from '../src/pages/HomePage';

// let loginPage: LoginPage; // LoginPage reference
// let homePage: HomePage;

// // Inside hook can we do the destructuring , page fixtures - Yes.
// test.beforeEach(async ({ page }) => {
//     loginPage = new LoginPage(page); 
// //    initialize the reference and page is the page reference here which we are given to the constructor of LoginPage class
 
//     await loginPage.goToLoginPage();
//     homePage = new HomePage(page);
// });

// //AAA
// // test.skip('login page title test', async ({page}) => { // In test.beforeEach, we have already destructured the page
// test.skip('login page title test', async () => {
//     // loginPage = new LoginPage(page);
//     // await loginPage.goToLoginPage();
//     let pageTitle = await loginPage.getLoginPageTitle();
//     console.log('Login page title : ', pageTitle);
//     expect(pageTitle).toBe('Account Login');
// });

// // test.skip('forgot pwd link exist test', async ({page}) => {
// test.skip('forgot pwd link exist test', async () => {
//     //  loginPage = new LoginPage(page);
//     // await loginPage.goToLoginPage();
//     expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
// });

// // test.skip('user is able to login to app', async ({page}) => {
// test.skip('user is able to login to app', async () => {
//     //  loginPage = new LoginPage(page);
//     // await loginPage.goToLoginPage();
//     // await loginPage.doLogin('pwapril@pw.com', 'pw123');
//     // expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
//     // expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
// });
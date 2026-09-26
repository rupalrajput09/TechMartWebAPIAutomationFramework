
// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../src/pages/LoginPage'; // relative path
// import { HomePage } from '../src/pages/HomePage';

// let loginPage: LoginPage; // LoginPage reference
// let homePage: HomePage;

// test.beforeEach(async({page})=>{
// loginPage = new LoginPage(page);
// // LoginPage is not initialized yet, So create the object of LoginPage and LoginPage constructor is waiting for the page
// //  so supply the page also.
// await loginPage.goToLoginPage();
// await loginPage.doLogin('test90@ymail.com', 'test@123');

// homePage = new HomePage(page);
// // We are crateing the object of HomePage class, So that we can call the methods of HomePage class
// });

// test.skip('home page title test', async () => {
//     let pageTitle = await homePage.getHomePageTitle();
//     console.log('home page title: ', pageTitle);
//     expect(pageTitle).toBe('My Account');
// });

// test.skip('logout link exist test', async () => {
//     expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
//     // assertion, and Logout link is exist on HomePage that why we are usinh HomePage
//     // soft assertion, if any of the test cases gets failed, it will check further or wont stop
//     expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
// });

// test.skip('home page headers exist test', async () => {
//     let allHeaders = await homePage.getHomePageHeaders();
//     console.log('home page headers: ', allHeaders);
//     expect.soft(allHeaders).toHaveLength(4);
//     expect.soft(allHeaders).toEqual([
//         'My Account',
//         'My Orders',
//         'My Affiliate Account',
//         'Newsletter'
// // Here if we change the sequence of array, it will give the error. Because arrays stored data on the basis of indexes.        
//     ]);
// });
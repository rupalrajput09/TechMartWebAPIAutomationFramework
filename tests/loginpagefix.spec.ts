import { test, expect } from '../src/fixtures/pagefixtures';
import {CsvHelper} from '../src/utils/CsvHelper';
import { ExcelHelper } from '../src/utils/ExcelHelper';
import { JsonHelper } from '../src/utils/JsonHelper';


test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
});

//AAA
test('login page title test', async ({ loginPage }) => {
    // let pageTitle = await loginPage.getLoginPageTitle();
        let pageTitle = await loginPage.getPageTitle();
    console.log('Login page title : ', pageTitle);
    expect(pageTitle).toBe('Account Login');
});

test('forgot pwd link exist test', async ({ loginPage }) => {
    expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
});

test('user is able to login to app with valid credentials', async ({ loginPage, homePage }) => {
// await loginPage.doLogin('pwapril@pw.com', 'pw123');
    await loginPage.doLogin(process.env.APP_USERNAME, process.env.APP_PASSWORD);
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});


//DD_0: using test data from fixtures: sequential run
// test(`login to app with invalid credentials with fixture data`, async ({ loginPage, testData }) => {
//     for (let row of testData) {
//         await loginPage.doLogin(row.username, row.password);
//         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
        
//     }
// });


//pros:
// light weight, easy to maintain/read, 3rd party lib, no license, flat files, fs, good for large set of test data
// DataDriven approach 1 - read csv data directly from the CSV file and loop the test method row wise
let testCSVData = CsvHelper.readCsv('src/testdata/logindata.csv'); // it will give array, so use array
for(let row of testCSVData){
test(`login to app with invalid credentials with CSV data - ${row.username} - ${row.password}`, async ({ loginPage, homePage }) => {
    await loginPage.doLogin(row.username, row.password);
    expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
});
}

//cons:
//1. maintenance
//2. MS Licenses
//3. major issue with excel file is corrupt, they corrupt very soon
//DD_2: read xlsx data directly fromn the excel file and loop the test method row wise...
let testExcelData = ExcelHelper.readExcel('src/testdata/opencarttestdata.xlsx', 'login');
for (let row of testExcelData) {
    test(`login to app with invalid credentials with Excel Data- ${row.username} - ${row.password}`, async ({ loginPage, homePage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};


//Pros:
//1. inbuilt method: parse, lightweight, smaller data source
//DD_3: read JSON data directly fromn the JSON file and loop the test method row wise...
let testJSONData = JsonHelper.readJson('src/testdata/logindata.json');
for (let row of testJSONData) {
    test(`login to app with invalid credentials with JSON Data- ${row.username} - ${row.password}`, async ({ loginPage, homePage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};


//common features test:
// test('App logo exists on Login Page', async ({ loginPage }) => {
    test('App logo exists on Login Page', async ({ basePage }) => {
    expect(await basePage.isLogoVisible()).toBeTruthy();
});

test('Search Box exists on Login Page', async ({ basePage }) => {
    expect(await basePage.isSearchBoxVisible()).toBeTruthy();
});

test('Cart exists on Login Page', async ({ basePage }) => {
    expect(await basePage.isCartButtonVisible()).toBeTruthy();
});

test('Footers exists on Login Page', async ({ basePage }) => {
    expect(await basePage.getPageFootersCount()).toBe(16);
});





// All the test cases are running in the parallel mode



// Here in Playwright no page zigzag pattern, no chaning model, not returning landing page class object.
// Because you are on Windows, USERNAME is commonly already an operating-system environment variable.
// So this: process.env.USERNAME
// may return your Windows username, instead of: test90@ymail.com

// I strongly recommend changing your variable names.

// config/.env.qa

// APP_USERNAME=test90@ymail.com
// APP_PASSWORD=test@123

// On Windows, USERNAME is often already used as a system environment variable. So when you wrote:
// USERNAME=test90@ymail.com
// PASSWORD=test@123
// process.env.USERNAME could pick up the Windows username instead of your test username.
// By changing them to:

// APP_USERNAME=test90@ymail.com
// APP_PASSWORD=test@123

// you avoided that conflict.

// Remember this rule - 

// For project-specific environment variables, use unique names:

// APP_USERNAME=...
// APP_PASSWORD=...
// APP_URL=...
// API_BASE_URL=...

// rather than generic names like:

// USERNAME=...
// PASSWORD=...
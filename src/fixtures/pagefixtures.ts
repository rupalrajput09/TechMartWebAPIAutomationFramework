
import{test as baseTest} from '@playwright/test';
import{BasePage} from '../pages/BasePage';
import{HomePage} from '../pages/HomePage';
import{LoginPage} from '../pages/LoginPage';
import{SearchResultsPage} from '../pages/SearchResultsPage';
import{ProductInfoPage} from '../pages/ProductInfoPage';

// import { CsvHelper } from '../utils/CsvHelper';

// Now define a type here. pageFixtures have all the references
type pageFixtures = {
    basePage: BasePage,
    homePage: HomePage,
    loginPage: LoginPage,
    searchResultsPage: SearchResultsPage,
    productInfoPage: ProductInfoPage,
    testData: Record<string, string>[];
}

// extend the playwright test: using baseTest.extend: inheritance (It looks like inheritance but not with the classes)

export let test = baseTest.extend<pageFixtures>({

    basePage: async ({ page }, use) => { //This is the property of the fixture or this is the actual fixture name 
        // that we have created.
        let basePage = new BasePage(page); //this is the object that we are using
        await use(basePage); // The object is ready to take this particular page from our side. 
    },

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },

    searchResultsPage: async ({ page }, use) => {
        let searchResultsPage = new SearchResultsPage(page);
        await use(searchResultsPage);
    },

    productInfoPage: async ({ page }, use) => {
        let productInfoPage = new ProductInfoPage(page);
        await use(productInfoPage);
    },

//  testData: async ({ }, use) => {
//         let testCSVData = CsvHelper.readCsv('src\testdata\logindata.csv');
//       await  use(testCSVData);
//     }
});

export { expect } from '@playwright/test';



// export let test = means store all the fixtures in this test and export
// use object is kind of what you want to deliver.
// use() method is to deliver the fixture to the test runner.


// type pageFixtures = {
//     basePage: BasePage,
//     homePage: HomePage,
//     loginPage: LoginPage
// }   

// This basePage is nothing related to this basePage ( let basePage = new BasePage(page)); 


//   basePage: async ({ page }, use) => {
//         // that we have created.
//         let basePage = new BasePage(page); 
//         await use(basePage); 
//     },


// Here, export let test = baseTest.extend<pageFixtures> instead of test variable name could be anything
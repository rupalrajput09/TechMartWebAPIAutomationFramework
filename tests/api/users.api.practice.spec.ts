import { APIResponse } from '@playwright/test';
import { test, expect, request } from '@playwright/test';

let AUTH_TOKEN = {
    Authorization: 'Bearer 6ed4c58551c269893a6837536a01c16fc3571ce64c189bd1156376119cc0f853'
};

// AUTH_TOKEN is an object

test('get all users GET api test', async({request})=>{
    let response:APIResponse = await request.get('https://gorest.co.in/public/v2/users',{
                headers:AUTH_TOKEN
});

// console.log(response);
let jsonBody = await response.json();
console.log(jsonBody);
console.log(response.status());// 200, response status code
console.log(response.statusText());// OK
expect(response.status()).toBe(200);
});

test('create a user POST api test', async({request})=>{
//    User JavaScript object  
  let userData = {
            name: 'manish',
             email: `pwautomation9@open.com`,
//           email: `pwautomation_${Date.now()}@open.com`,
            gender: 'male',
            status: 'active'
        };

// JS object ---> JSON(Serialization)
// JSON.stringfy(); we don't need to do here, direct pass JS object

let response:APIResponse = await request.post('https://gorest.co.in/public/v2/users',{
                headers:AUTH_TOKEN,
                data: userData
});

let jsonBody = await response.json();
console.log(jsonBody);
console.log(response.status());//201
console.log(response.statusText());// Created
expect(response.status()).toBe(201);

});

test('Update a user POST api test', async({request})=>{
//    User JavaScript object  
  let userData = {
            name: 'manish Lalwani',
            email: `pwautomation@open.com`,

        //  email: `pwautomation_${Date.now()}@open.com`,
            gender: 'male',
            status: 'inactive'
        };

// JS object ---> JSON(Serialization)
// JSON.stringfy(); we don't need to do here, direct pass JS object

let response:APIResponse = await request.put('https://gorest.co.in/public/v2/users/8616843',{
                headers:AUTH_TOKEN,
                data: userData
});

let jsonBody = await response.json();
console.log(jsonBody);
console.log(response.status());//200
console.log(response.statusText());// OK
expect(response.status()).toBe(201);

});

test('Delete a user delete api test', async({request})=>{

let response:APIResponse = await request.delete('https://gorest.co.in/public/v2/users/8617204',{
                headers:AUTH_TOKEN,
});

// let jsonBody = await response.json();
// console.log(jsonBody); we don't want to fetch JSON body from the response
console.log(response.status());//204
console.log(response.statusText());// No Content    
expect(response.status()).toBe(204);

});
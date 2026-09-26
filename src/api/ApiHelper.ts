

import { APIRequestContext } from "@playwright/test";

export class ApiHelper {

    private readonly request: APIRequestContext; // For request
    private readonly baseURL: string; // Every API has its own URL

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    //helper methods:

    //GET
    async get(endPoint: string, headers?: Record<string, string>) { //doGet()/ getValue() any other method name can be used
        let response = await this.request.get(`${this.baseURL}${endPoint}`, {
            headers: headers
// this header coming from the Playwright : this header you have to supply    
        });
        console.log(await response.json(), response.status());
        return {
            status: response.status(),
            body: await response.json()
        } // return an object 
    }

    //POST
    async post(endPoint: string, data: object, headers?: Record<string, string>) {
        let response = await this.request.post(`${this.baseURL}${endPoint}`, {
            headers: headers,
            data: data
        });
        console.log(await response.json(), response.status());

        return {
            status: response.status(),
            body: await response.json()
        }
    }



    //PUT
    async put(endPoint: string, data: object, headers?: Record<string, string>) {
        let response = await this.request.put(`${this.baseURL}${endPoint}`, {
            headers: headers,
            data: data
        });
        console.log(await response.json(), response.status());

        return {
            status: response.status(),
            body: await response.json()
        }
    }


    //DELETE
    async delete(endPoint: string, headers?: Record<string, string>) {
        let response = await this.request.delete(`${this.baseURL}${endPoint}`, {
            headers: headers
        });
        console.log(response.status());

        return {
            status: response.status(),
        }
    }


}
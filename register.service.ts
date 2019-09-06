import { Injectable } from '@angular/core';
import { Customer } from '../beans/customer.bean';
import { RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService
{
    constructor(private httpServicie: HttpClient) {}

    addCustomer(customer: Customer)
    {
        let body = JSON.stringify(customer);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: Headers});
        return this.httpServicie.post('http://localhost:8080/MyProject/api/customer/save', body, options);
    }
}
import { Component, OnInit } from '@angular/core';
import { Customer } from '../beans/customer.bean';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
customer = new Customer();
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

addNewRecord(): void{
  this.registerService.addCustomer(this.customer).subscribe(result=>
    {
      console.log(result);
    });
    
} 
}

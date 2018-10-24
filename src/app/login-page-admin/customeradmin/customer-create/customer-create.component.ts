import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { TelecomService } from '../service/telecom.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {


  customer:Customer;
  isUpdate:boolean;
  constructor(private ts:TelecomService,private ar:ActivatedRoute,private router: Router) { }

  
  ngOnInit() 
  {
    this.customer=new Customer();
    this.isUpdate=false;
    this.ar.params.subscribe(params=>
      {let tid=params['id'];
       if(tid)
        {
          this.ts.getById(tid).subscribe(data=>
            {
              this.customer=data;
              this.isUpdate=true;
            }
            )
        }
      }
    )
  }

  saveCustomer()
  {
    if(this.isUpdate)
    {
      this.ts.updateCustomer(this.customer).subscribe(data=>
        {
          this.router.navigate(['../customer32']);
        })
        alert("The data has been updated");
    }
  
    else
    {
      this.ts.saveCustomer(this.customer).subscribe(data=>
        {
          this.router.navigate(['../customer32']);
        })
        alert("The data has been submitted");
    }
  }
}

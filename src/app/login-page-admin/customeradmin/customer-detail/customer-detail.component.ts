import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelecomService } from '../service/telecom.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer :Customer;
  constructor(private router: Router, private ar: ActivatedRoute,private ts:TelecomService) { }
  
  ngOnInit()
  {
   this.customer=new Customer();

     this.ar.params.subscribe(params=>
      {
         let tid=params['id'];
         this.ts.getById(tid).subscribe(data=>
           {this.customer=data})
      }
     );
  }


  deleteCustomer(id) {
    this.ts.delete(this.customer.govtID).subscribe(resp=>
      {
        if(resp.ok)
        {
          this.router.navigateByUrl('loginadmin/customeradmin/customer32');
        }
      }
    );
  }
}
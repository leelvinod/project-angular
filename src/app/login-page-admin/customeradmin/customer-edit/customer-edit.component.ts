import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { TelecomService } from '../service/telecom.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {


  customer:Customer;
 // isUpdate:boolean;
  constructor(private ts:TelecomService,private ar:ActivatedRoute,private router: Router) { }

  ngOnInit() {

    console.log("pooo");
    this.customer=new Customer();

    this.ar.params.subscribe(params=>
     {
        let tid=params['id'];
        if(tid){
        console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOO"+tid);
        this.ts.getById(tid).subscribe(data=>
          {this.customer=data});
        }
        else{
          console.log("No IDDDDD");
        }
     }
    );    

   // this.getCustomer(this.route.snapshot.params['id']);
  }
/*
  getCustomer(id) {
    this.http.get(this.defaultURL + id).subscribe(data => {
      this.customer = data;
    });
  }

  updateCustomer(id, data) {
    this.http.put(this.defaultURL + id, data)
      .subscribe(res => {
          this.router.navigateByUrl('/customer');
        }, (err) => {
          console.log(err);
        }
      );
    alert("payment successful");  
  }
*/
saveCustomer()
  {
   
      this.ts.updateCustomer(this.customer).subscribe(
        (data)=>
        {
          this.router.navigateByUrl('loginadmin/customeradmin/customer32');
        });
    }
  
   /* else
    {
      this.ts.saveCustomer(this.customer).subscribe(data=>
        {
          this.router.navigate(['/customer']);
        })
    }
  }*/

}

import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { AgentelecomService } from '../agentelecom.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-agent-create',
  templateUrl: './agent-create.component.html',
  styleUrls: ['./agent-create.component.css']
})
export class AgentCreateComponent implements OnInit {


  customer: Customer;
  //isUpdate:boolean;
  constructor(private ts: AgentelecomService, private ar: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.customer = new Customer();
    // this.isUpdate=false;
    /* this.ar.params.subscribe(params=>
       {let tid=params['id'];
        if(tid)
         {
           this.ts.getById(tid).subscribe(data=>
             {
               this.customer=data;
              // this.isUpdate=true;
             }
             )
         }
       }
     )*/
  }

  saveCustomer() {

    this.ts.saveCustomer(this.customer).subscribe(data => {
      this.router.navigateByUrl('/loginadmin/csaadmin/agent');
    })

  }
}

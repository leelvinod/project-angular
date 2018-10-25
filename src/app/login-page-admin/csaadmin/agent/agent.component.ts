import { Component, OnInit } from '@angular/core';

import { AgentelecomService } from '../agentelecom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  customer: Customer[];


  constructor(private router: Router, private ts: AgentelecomService, private ar: ActivatedRoute) { }

  ngOnInit() {


    this.ts.getAll().subscribe(data => this.customer = data)
  }

  deleteCustomer(iid) {
    this.ts.delete(iid).subscribe(resp => {
      if (resp.ok) {
        this.router.navigateByUrl("/agent");
        window.location.reload();
      }
    }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelecomService } from '../service/telecom.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 customer:Customer[];
  constructor(private ts:TelecomService,private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ts.getAll().subscribe(data=>this.customer=data)
    }
  }
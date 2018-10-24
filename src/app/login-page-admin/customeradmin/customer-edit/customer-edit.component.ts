import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  amt=0;
  card;
  customer = {};
  defaultURL = 'http://localhost:8084/cust/edit';
  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
  }

  getCustomer(id) {
    this.http.get(this.defaultURL + id).subscribe(data => {
      this.customer = data;
    });
  }

  updateCustomer(id, data) {
    this.http.put(this.defaultURL + id, data)
      .subscribe(res => {
          this.router.navigate(['/customer']);
        }, (err) => {
          console.log(err);
        }
      );
    alert("payment successful");  
  }

}

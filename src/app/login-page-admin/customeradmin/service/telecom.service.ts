import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import {Http,RequestOptions, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TelecomService {

  baseUrl:string;

  constructor(private http:Http) 
  {
    this.baseUrl="http://localhost:8084/cust"
   }




  getAll():Observable<Customer[]>
  {
    return this.http.get(this.baseUrl).pipe(map(data=>data.json()));
  }






   getJsonContentTypeHeader():RequestOptions
  {
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    
    return new RequestOptions({headers:headers});
  }
  getBaseUrlForAdd():string
  {
    return this.baseUrl;
  }
  saveCustomer(customer:Customer)
  {
    return this.http.post(this.getBaseUrlForAdd(),JSON.stringify(customer),this.getJsonContentTypeHeader());
  }







  getBaseUrlForGetById(id):string
  {
    return this.baseUrl+"/getOne/"+id
  }
  getById(id:number):Observable<Customer>
  {
    return this.http.get(this.getBaseUrlForGetById(id)).pipe(map(data=>data.json()));
  }



  
  getBaseUrlForDeleteTicket(id):string
  {
    return this.baseUrl+"/delete/"+id;
  }
  delete(id:number):Observable<Response>
  {
    return this.http.delete(this.getBaseUrlForDeleteTicket(id));
  }






  
  getBaseUrlForUpdateTicket():string
  {
    return this.baseUrl+"/edit";
  }
  updateCustomer(customer:Customer)
  {
    return this.http.put
    (this.getBaseUrlForUpdateTicket(),JSON.stringify(customer),this.getJsonContentTypeHeader());
  }



}



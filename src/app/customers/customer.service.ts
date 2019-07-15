import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: any;

  constructor(
    private http: HttpClient
    ) { }

  getCustomers() {
    return this.http.get('http://localhost:3000/api/customers');
  }

  getCustomer(id: string) {
    return this.http.get('http://localhost:3000/api/customer/' + id) as Observable<any>;
  }
}

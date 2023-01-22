import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Product } from "../../product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiurl = "http://localhost:3000/product";

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiurl);
  }

  getSingleProduct(id: String): Observable<Product[]> {
    let url = this.apiurl+'/read/'+id;

    return this.http.get<Product[]>(url);
  }


}

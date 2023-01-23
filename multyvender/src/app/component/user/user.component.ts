import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from "../../service/product.service";
import { OrderService } from "../../service/order.service";
import { Product } from "../../../product";
import { Order } from "../../../order";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  products: Product[] = [];
  orders: Order[] = [];
  email!:string;

  constructor(private router:Router, private productService: ProductService, private orderService: OrderService, private cookieService: CookieService) { }

  ngOnInit(){
    this.orderService.getOrder().subscribe((orders) => (this.orders = orders));
    this.productService.getProduct().subscribe((products) => (this.products = products));

    this.email = this.cookieService.get('email');


  }



}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from "../../service/product.service";
import { OrderService } from "../../service/order.service";
import { Product } from "../../../product";
import { Order } from "../../../order";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [];
  orders: Order[] = [];
  id!:string;
  img!:string;
  email!:string;

  private routeSub: Subscription = new Subscription;
  constructor(private route: ActivatedRoute, private router:Router, private productService: ProductService, private orderService: OrderService, private cookieService: CookieService) { }

  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id) //log the entire params object
      // console.log(params['id']) //log the value of id
    });
    this.productService.getProduct().subscribe((products) => (this.products = products));

    this.email = this.cookieService.get('name');

    console.log('====================================');
    console.log(this.products);
    console.log('====================================');
  }

  buynow(){
    const newOrder: Order = {
      cusid:this.email,
      productid:this.id,
    };

    this.orderService.addOrder(newOrder).subscribe((newTask) => this.orders.push(newOrder));

    this.router.navigate(['/user']);

  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from "../../service/product.service";
import { Product } from "../../../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [];
  id!:String;
  img!:string;

  private routeSub: Subscription = new Subscription;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id) //log the entire params object
      // console.log(params['id']) //log the value of id
    });
    this.productService.getProduct().subscribe((products) => (this.products = products));

    console.log('====================================');
    console.log(this.products);
    console.log('====================================');
  }

}

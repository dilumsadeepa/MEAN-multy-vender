import { Component } from '@angular/core';
import { ProductService } from "../../service/product.service";
import { Product } from "../../../product";

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent {
  
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getProduct().subscribe((products) => (this.products = products));

  }

}

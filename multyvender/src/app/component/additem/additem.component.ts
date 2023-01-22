import { Component } from '@angular/core';
import { Product } from 'src/product';
import {ProductService  } from "../../service/product.service";


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {

  title!:String;
  catagory!:String;
  discount!:String;
  price!:string;
  dis!:String;
  img!:String;

  products:Product[] = [];

  constructor(private productService: ProductService){}

  addProduct(){
    const newProduct = {
      title : this.title,
      catagory : this.catagory,
      discount : this.discount,
      price : this.price,
      dis : this.dis,
      img : this.img,
    }

    this.productService.addProduct(newProduct).subscribe((newProduct) => this.products.push(newProduct));

    this.title = "";
    this.catagory = "";
    this.discount = "";
    this.price = "";
    this.dis = "";
    this.img = "";
  }


}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./component/about/about.component";
import { NavComponent } from "./component/nav/nav.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HomeComponent } from "./component/home/home.component";
import { ShopComponent } from "./component/shop/shop.component";
import { CartComponent } from "./component/cart/cart.component";
import { ProductComponent } from "./component/product/product.component";
import { AdminComponent } from "./component/admin/admin.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'product', component: ProductComponent},
  { path: 'admin', component: AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

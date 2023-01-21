import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./component/about/about.component";
import { NavComponent } from "./component/nav/nav.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HomeComponent } from "./component/home/home.component";
import { ShopComponent } from "./component/shop/shop.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ActivatedRoute } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RewardsComponent } from './rewards/rewards.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'singleproduct/:id/:row', component:ProductDetailsComponent},
  {path:'displayproduct/earrings/:row', component:DisplayproductComponent},
  {path:'displayproduct/necklace/:row', component:DisplayproductComponent},
  {path:'displayproduct/rings/:row', component:DisplayproductComponent},
  {path:'displayproduct/bracelate/:row', component:DisplayproductComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'rewards', component:RewardsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

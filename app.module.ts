import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { DataService } from './services/data.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RewardsComponent } from './rewards/rewards.component';
//import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductDetailsComponent,
    ProductComponentComponent,
    DisplayproductComponent,
    CartComponent,
    CheckoutComponent,
    RewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

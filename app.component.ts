import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { AddToCartService } from './addto-cart.service';
import { WishlistserviceService } from './wishlistservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'myforms';
  products: any;
  total: any;
  cartItemList: any;
  constructor(private ac:AddToCartService, private ws:WishlistserviceService){}


  getData(){
    // this.products=this.ac.getProducts();
    // console.log("model data",this.products);
    this.ac.getProducts().subscribe((res)=>{
      this.products=res;
    });
    
  }

  getWishData()
  {
    this.products=this.ws.getProduct();
    console.log(this.products);

  }
}
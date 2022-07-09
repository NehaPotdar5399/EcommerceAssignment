import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { AddToCartService } from '../addto-cart.service';
import { WishlistserviceService } from '../wishlistservice.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  eData: any;
  bData: any;
  nData: any;
  rData: any;
  singleProduct:any;

  constructor( private restService:RestService, private addToCartService:AddToCartService, private addToWishlistService:WishlistserviceService) { }

  ngOnInit(): void {

    this.restService.getEarrings().subscribe(
      val =>
      this.eData=val
      // console.log(val)
    );    
    this.restService.getBracelates().subscribe(
      val =>
      this.bData=val
    );    
    this.restService.getNacklaces().subscribe(
      val =>
      this.nData=val
    );    this.restService.getRings().subscribe(
      val =>
      this.rData=val
    );
    

  }
  
  addToWishlist(id: any, row: any) {
    console.log(id)
    if (row == 0) {
      this.singleProduct = this.eData.filter((element: any) => {
        
        return element['id'] == id;
      });
      console.log("single product",this.singleProduct[0])
      this.addToWishlistService.setProduct(this.singleProduct[0]);   
     }    
      if (row == 1) {
      this.singleProduct = this.nData.filter((element: any) => {
        return element['id'] == id;
      });
      console.log(this.singleProduct)
      this.addToWishlistService.setProduct(this.singleProduct[0]);
    }    if (row == 2) {
      this.singleProduct = this.rData.filter((element: any) => {
        return element['id'] == id;
      });
      console.log(this.singleProduct)
      this.addToWishlistService.setProduct(this.singleProduct[0]);
    }    if (row == 3) {
      this.singleProduct = this.bData.filter((element: any) => {
        return element['id'] == id;
      });
      console.log(this.singleProduct)
      this.addToWishlistService.setProduct(this.singleProduct[0]);
    }
  }

  addToCart(id: any, row: any) {
    console.log(id)
    if (row == 0) {
      this.singleProduct = this.eData.filter((element: any) => {
        
        return element['id'] == id;
      });
      console.log(this.singleProduct)
      this.addToCartService.setProduct(this.singleProduct[0]);   
     }    
      if (row == 1) {
      this.singleProduct = this.nData.filter((element: any) => {
        return element['id'] == id;
      });
      console.log(this.singleProduct)
      this.addToCartService.setProduct(this.singleProduct[0]);
    }    if (row == 2) {
      this.singleProduct = this.rData.filter((element: any) => {
        return element['id'] == id;
      });
      console.log(this.singleProduct)
      this.addToCartService.setProduct(this.singleProduct[0]);
    }    if (row == 3) {
      this.singleProduct = this.bData.filter((element: any) => {
        return element['id'] == id;
      });
      console.log(this.singleProduct)
      this.addToCartService.setProduct(this.singleProduct[0]);
    }
  }



  

}

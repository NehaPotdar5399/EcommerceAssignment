import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Products } from '../Products';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartService } from '../addto-cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  row: any;
  id: any;
  singleProduct: any;
  discountedPrice: any;
  product:any;
  products: any;
  addToCartService: any;
  

  constructor(private rs:RestService, private activatedroute:ActivatedRoute, private route:Router, private as:AddToCartService) { }
  
  ngOnInit(): void { 
    this.id=this.activatedroute.snapshot.params['id'];
  this.row=this.activatedroute.snapshot.params['row'];    if(this.row=== '0'){
    this.rs.getSingleEarrings(this.id).subscribe((val)=>{
      this.singleProduct=val;
      console.log(this.singleProduct);
      this.discountedPrice=this.singleProduct.price-(this.singleProduct.price/this.singleProduct.discount);      }
      );
  }    if(this.row=== '1'){
    this.rs.getSingleNecklace(this.id).subscribe((val)=>{
      this.singleProduct=val;
      console.log(this.singleProduct);
      this.discountedPrice=this.singleProduct.price-(this.singleProduct.price/this.singleProduct.discount);      }
      );
  }    if(this.row=== '2'){
    this.rs.getSingleRings(this.id).subscribe((val)=>{
      this.singleProduct=val;
      console.log(this.singleProduct);
      this.discountedPrice=this.singleProduct.price-(this.singleProduct.price/this.singleProduct.discount);      }
      );
  }    if(this.row=== '3'){
    this.rs.getSingleBracelet(this.id).subscribe((val)=>{
      this.singleProduct=val;
      console.log(this.singleProduct);
      this.discountedPrice=this.singleProduct.price-(this.singleProduct.price/this.singleProduct.discount);      }
      );
  }
  
}

addToCart(id:any){
  this.as.setProduct(this.singleProduct);
  }


    
  }



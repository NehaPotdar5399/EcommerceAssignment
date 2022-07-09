import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../addto-cart.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  subTotal:any;
  products: any;
  total:any;
  count:any;
  cartItemList: any;
  earringsCount=0;
  discountValue=0;
  totalPrice=0;
  isCouponApplied: boolean=true;
  necklaceCount=0;
  ringsCount=0;
  braceletCount=0;
  allCartProducts: any;
  _productCart: any;
  cartLength: any;
  constructor(private as:AddToCartService,
    private cs:CommonService) { }

  ngOnInit(): void {
    
      // this.products=this.as.getProducts();
      // console.log("model data",this.products);

      this.as.getProducts().subscribe((res: any) => {
        this.products=res;
      });
      if(this.products.length>0)
      {
        
        console.log(length);


      }
      this.products.forEach((item: any) => {
        let product_name = item.category;
        
        if (product_name =="Bracelets") {
          this.braceletCount++;
        }

      });
      console.log(this.braceletCount);

      this.products.forEach((item: any) => {
        let product_name = item.category;
        
        if (product_name =="Necklace") {
          this.necklaceCount++;
        }

      });
      console.log(this.necklaceCount);

      this.products.forEach((item: any) => {
        let product_name = item.category;
        
        if (product_name =="Earrings") {
          this.earringsCount++;
        }

      });
      console.log(this.earringsCount);

      this.products.forEach((item: any) => {
        let product_name = item.category;
        
        if (product_name =="Rings") {
          this.ringsCount++;
        }

      });
      console.log(this.ringsCount);
      this.totalPrice=this.getTotal(this.products);
      
  }


  getTotal(products:any){
    let sub=0;
    products.forEach((item:any)=>{
      sub=sub+Number(item.originalPrice);
      console.log(sub);
    })
    return sub;
  }
  

applyCoupon(value: any) {
  if (value === 10 && this.earringsCount >= 1) {
    this.discountValue = (value / 100) * this.totalPrice;
    this.totalPrice = this.totalPrice - this.discountValue;
    this.isCouponApplied = false;    
      
    
  } else if (value === 20 && this.necklaceCount >= 2) {
    this.discountValue = (value / 100) * this.totalPrice;
    this.totalPrice = this.totalPrice - this.discountValue;
    this.isCouponApplied = false;      

  } else if (value === 15 && this.ringsCount >= 1) {
    this.discountValue = (value / 100) * this.totalPrice;
    this.totalPrice = this.totalPrice - this.discountValue;
    this.isCouponApplied = false;      
  } else if (value === 25 && this.braceletCount >= 2) {
    this.discountValue = (value / 100) * this.totalPrice;
    this.totalPrice = this.totalPrice - this.discountValue;
    this.isCouponApplied = false;      
  } else {
    alert('Invalid Coupon');
      
  }
}
remove(i:any)
{
  this.as.removeCartProduct(i);
}


  // getD

 

 
}

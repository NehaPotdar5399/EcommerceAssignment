import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddToCartService {
  productCart: any = [];
  
  
  localData: any;
  cartItemList: any;
  cartProductList = new BehaviorSubject<any>([]);
  ac: any;
  constructor() { }


  setProduct(product: any) {
    console.log( product)
    let previousdata = localStorage.getItem('product');
    if (previousdata !== undefined && previousdata !== null && previousdata.length !== 0) {
      this.productCart = JSON.parse(previousdata);
    }
    this.productCart.push(product);
    console.log(this.productCart);
    this.cartProductList.next(this.productCart);
    localStorage.setItem('product', JSON.stringify(this.productCart));

  }

  // getProduct() {
  //   this.localData = localStorage.getItem('product');
  //   console.log("get",JSON.parse(this.localData));
  //   return JSON.parse(this.localData)
  // }

  getProducts() {
    let previousList = localStorage.getItem('product');    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.cartItemList = JSON.parse(previousList);
    }
    this.cartProductList.next(this.cartItemList);
    this.cartProductList.value.forEach((item: any) => {
      console.log(item.original_price);
    });
    return this.cartProductList.asObservable();  }




  removeCartProduct(productId: any) {
    console.log(productId)
    let previousList = localStorage.getItem('product');
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.cartItemList = JSON.parse(previousList);
      console.log("remove",this.cartItemList);
      // this.cartItemList.map((item: any, index: any) => {      if (item.id == productId){
      //     this.cartItemList.splice(index, 1);
      //   }
      // });
      this.cartItemList.splice(productId,1);
      console.log(this.cartItemList);
    }
   this.cartProductList.next(this.cartItemList);
    localStorage.setItem('product', JSON.stringify(this.cartItemList));
    
  }
}







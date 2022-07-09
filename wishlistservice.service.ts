import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistserviceService {
  wishProduct:any;
  localData: any;
  setProduct(product: any) {
    console.log( product)
    let previousdata = localStorage.getItem('product');
    // console.log("before ws :",JSON.stringify(previousdata).length);

    if (previousdata !== undefined && previousdata !== null && previousdata.length !== 0) {
      this.wishProduct = JSON.parse(previousdata);
    }
    this.wishProduct.push(product);
    // console.log("After ws :",this.wishProduct.length);
    localStorage.setItem('product', JSON.stringify(this.wishProduct));
  }

  getProduct() {
    this.localData = localStorage.getItem('product');
    console.log("get",JSON.parse(this.localData));
    return JSON.parse(this.localData)
  }


  constructor() { }
}

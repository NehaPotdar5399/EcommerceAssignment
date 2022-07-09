import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  getDiscountedPrice(price:any,discount:any){
    return price-(price/discount)
  }
  
}

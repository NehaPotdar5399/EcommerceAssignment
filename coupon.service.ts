import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coupons } from './coupons';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  url:any="http://localhost:3000/coupons";
  constructor(private httpclient:HttpClient) {
    
  }
  getCoupons():Observable<any>{
      
    return this.httpclient.get<any>(this.url);
  }
 

  
}

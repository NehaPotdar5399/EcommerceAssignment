import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  data:any;

  constructor(private http:HttpClient, private cs:CouponService ) { }

  ngOnInit(): void {
    this.cs.getCoupons().subscribe(
      val =>
      this.data=val
      // console.log(val)
    );    
  }

}

import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AddToCartService } from '../addto-cart.service';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {
  row: any;
  product: any;
  discountedPrice: any;
  products: any;

  constructor(private rs: RestService, private activatedroute: ActivatedRoute, private ac:AddToCartService) {

  }

  ngOnInit(): void {
    console.log("adhich")
    this.row = this.activatedroute.snapshot.params['row'];
    if (this.row === '0') {
      this.rs.getEarrings().subscribe((val) => {
        this.product = val;
        console.log(this.product);
        this.discountedPrice = this.product.price - (this.product.price / this.product.discount);
      }
      );
    } this.row = this.activatedroute.snapshot.params['row']; if (this.row === '1') {
      this.rs.getNacklaces().subscribe((val) => {
        this.product = val;
        console.log(this.product);
        this.discountedPrice = this.product.price - (this.product.price / this.product.discount);
      }
      );
    } this.row = this.activatedroute.snapshot.params['row']; if (this.row === '2') {
      this.rs.getRings().subscribe((val) => {
        this.product = val;
        console.log(this.product);
        this.discountedPrice = this.product.price - (this.product.price / this.product.discount);
      }
      );
    } this.row = this.activatedroute.snapshot.params['row']; if (this.row === '3') {
      this.rs.getBracelates().subscribe((val) => {
        this.product = val;
        console.log(this.product);
        this.discountedPrice = this.product.price - (this.product.price / this.product.discount);
      }
      );
    }
  }
  singleProduct:any
addToCart(id:any){
this.singleProduct=this.product.filter((element:any)=>{
  return element['id']== id;
});
this.ac.setProduct(this.singleProduct[0]);
}

}



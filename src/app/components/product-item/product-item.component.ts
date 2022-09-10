import { Component, OnInit } from '@angular/core';

interface Product{
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product:Product = {
    sno: 'AA101',
    name: "Men Navy Blue Solid Sweatshirt",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    qty: 2,
    price: 2599
  };

  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty():void{
    this.product = {
      ...this.product,
      qty: this.product.qty + 1
    }
  }

  public dicrementQty():void{
    this.product = {
      ...this.product,
      qty: this.product.qty - 1 > 0 ? this.product.qty - 1 : 1
    }
  }
}

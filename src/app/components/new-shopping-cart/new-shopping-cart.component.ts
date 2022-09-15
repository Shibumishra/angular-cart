import { Component, OnInit } from '@angular/core';

interface Product {
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-new-shopping-cart',
  templateUrl: './new-shopping-cart.component.html',
  styleUrls: ['./new-shopping-cart.component.css']
})
export class NewShoppingCartComponent implements OnInit {
  public products: Product[] = [
    {
      sno: 'AA101',
      name: "Men Navy Blue Solid Sweatshirt",
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      qty: 2,
      price: 2599
    },
    {
      sno: 'AA102',
      name: "Men Black MAMGP T7 Sweat Sporty Jacket",
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
      qty: 3,
      price: 7999,
    },
    {
      sno: 'AA103',
      name: "Men Black Action Parkview Lifestyle Shoes",
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
      qty: 1,
      price: 5999
    },
    {
      sno: 'AA104',
      name: "Women Black Solid Lightweight Leather Jacket",
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
      qty: 2,
      price: 999
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

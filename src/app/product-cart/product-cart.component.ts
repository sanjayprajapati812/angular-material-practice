import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  products: Product[] = this.cartService.getItems()

  getTotalPrice: number = 0;

  ngOnInit(): void {
    if (this.products.length > 0) {
      this.getTotalPrice = this.products.reduce((acc, e) => {
        //console.log(acc, e);
        acc += e.price
        return acc
      }, 0)
    }
  }


  constructor(private cartService: CartService) { }
}

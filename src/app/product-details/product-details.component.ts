import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../product';

import { CartService } from '../cart.service';
import { ProductListService } from '../product-list.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined

  products: Product[] = this.cartService.getItems()

  addToCart(product: Product) {

    let item: Product | undefined = this.products.find((e) => { return e.id == product.id })

    if (item) {
      //console.log(item);
      alert('product already added to the cart! please buy another product')
      return
    }
    this.cartService.addToCart(product)
    alert('Your product has been added to the cart!')
  }

  constructor(private route: ActivatedRoute, private cartService: CartService, private proListService: ProductListService) { }

  ngOnInit() {
    const productParam = this.route.snapshot.paramMap;
    const productId = Number(productParam.get('productId'))
    this.product = this.proListService.getAllProducts().find((e) => { return e.id === productId })
  }
}

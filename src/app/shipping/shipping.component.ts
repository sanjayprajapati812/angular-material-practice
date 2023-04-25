import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import{Observable} from 'rxjs'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{

  shippingPrices!: Observable<{ type: string; price: number; }[]>;

  ngOnInit(): void {
    this.shippingPrices=this.cartService.getShippingData()
  }

  constructor(private cartService:CartService){}
}

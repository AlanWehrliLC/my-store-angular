import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.less']
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{type: string, price: number}[]>
  
  constructor(
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices()
  }
}

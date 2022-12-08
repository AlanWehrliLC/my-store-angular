import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent {
  product: Product | undefined

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    const routerParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routerParams.get('productId'))

    this.product = products.find(product => product.id === productIdFromRoute)
  }
}

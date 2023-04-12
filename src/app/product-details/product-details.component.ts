import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

// Java vs Typescript
// property
// private ActivatedRoute activatedRoute;
// public setActivatedRoute(ActivatedRoute activatedRoute){
  // this.activatedRoute = activatedRoute;
// }
// ProductDetailsComponent() {

// }
// private activatedRoute!: ActivatedRoute;
// constructor(activatedRoute: ActivatedRoute){
// this.activatedRoute = activatedRoute;
// }

product: Product | undefined;

// initialize the route
constructor(private activatedRoute: ActivatedRoute) {
console.log("Component is constructed!")
}
// lifecycle hook
ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.activatedRoute.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
}
}






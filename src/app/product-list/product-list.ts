import { Component, computed } from '@angular/core';


@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  product = {
    name: 'iPhone',
    price: 999,
    discountedName: 'Samsung Galaxy',
    discountedPrice: 899,
    inStock: 0,
    seller: "Apple"
  }

  fallback: number = 599;
  
  getDiscountedPrice = computed(() => {
    return this.product.discountedPrice / 3 || this.fallback;
  })
  

}

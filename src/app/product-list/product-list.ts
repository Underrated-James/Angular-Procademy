import { Component, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { Button } from "primeng/button";

@Component({
  selector: 'app-product-list',
  imports: [Button, AutoCompleteModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  items: any[] = [];
  value: any;

  product = {
    name: 'iPhone',
    price: 999,
    discountedName: 'Samsung Galaxy',
    discountedPrice: 899,
    inStock: 5,
    seller: "Apple",
    img: '/Iphone 17.jpeg'
  }

  isDisabled = computed(() => {
    if(this.product.inStock > 0){
      return false;
    } else {
      return true;
    }
  })


  fallback: number = 599;
  
  getDiscountedPrice = computed(() => {
    return this.product.discountedPrice / 3 || this.fallback;
  })
  

  addToCart(){
    console.log('Button clicked! Adding product to cart...');
  }
  
  search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }

}

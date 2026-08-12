import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-product-list',
  imports: [Button,FormsModule, InputTextModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  items: any[] = [];
  value: any;
  fallback: number = 599;
  qty = signal(0);

  product = {
    name: 'iPhone',
    price: 999,
    discountedName: 'Samsung Galaxy',
    discountedPrice: 899,
    inStock: 5,
    seller: "Apple",
    img: '/Iphone 17.jpeg'
  }

  dynamicPrice = computed(() => {
    return this.product.price * this.qty() || 0;
  })

  isDisabled = computed(() => {
    if(this.product.inStock > 0){
      return false;
    } else {
      return true;
    }
  })
  
  getDiscountedPrice = computed(() => {
    return this.product.discountedPrice / 3 || this.fallback;
  })
  
  addToCart(){
    console.log('Button clicked! Adding product to cart...');
  }

  currentValue(event: any){
    this.value = event.target.value;
    console.log(event.target.value);
  }

  increment(){
    this.qty.update((value) => value + 1);
  }

  decrement(){
    this.qty.update((value) => value - 1);
  }
  
  // search(event: AutoCompleteCompleteEvent) {
  //   this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  // }

}

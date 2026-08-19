import { Component } from '@angular/core';
import mockProducts from './products.json';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products = mockProducts;
}

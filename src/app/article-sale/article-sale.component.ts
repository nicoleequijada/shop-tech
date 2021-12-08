import { Component, OnInit } from '@angular/core';
import { products } from 'src/utils/products';

@Component({
  selector: 'app-article-sale',
  templateUrl: './article-sale.component.html',
  styleUrls: ['./article-sale.component.css']
})
export class ArticleSaleComponent implements OnInit {
  
  constructor() { }
  productsSale = products;

  
  ngOnInit(): void {
  }
  
}

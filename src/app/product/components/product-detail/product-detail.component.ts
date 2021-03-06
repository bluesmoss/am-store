import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
        const id = params.id;
        this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    })
  }

  createProduct() {
    const newProduct: Product = {
      id: '234',
      title: 'Blue',
      image: 'assets/images/stickers1.png',
      price: 4500,
      description: 'New product'

    };
    this.productService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    })    
  }
  
  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '234',
      title: 'Blue editions',
      image: 'assets/images/stickers1.png',
      price: 4900,
      description: 'New product edition'

    };
    this.productService.updateProduct('234' ,updateProduct)
    .subscribe(product => {
      console.log(product);
    })    
  }
  
  deleteProduct() {
    this.productService.deleteProduct('234')
    .subscribe(product => {
      console.log(product);
    })    
  }  
}

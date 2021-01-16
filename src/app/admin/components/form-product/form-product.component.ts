import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const product = this.form.value;
      this.productService.createProduct(product)
        .subscribe(newProduct => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        });

    }
  }

  private buildForm(){
    this.form = this.formbuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: ['', []],
      description: ['', [Validators.required]],
    });
  }


}
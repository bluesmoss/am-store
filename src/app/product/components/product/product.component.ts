import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../../../product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> =  new EventEmitter();

  today= new Date();
  constructor() {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('2. changes');

  // }
  ngDoCheck(): void {
    console.log('4. do check');
  }

  ngOnInit(): void {
    console.log('3. init');
  }

  addCart(){
    console.log('anadir al carrito');
    this.productClicked.emit(this.product.id);
  }


  ngOnDestroy(): void {
    console.log('5. ng on destroy');

  }

}

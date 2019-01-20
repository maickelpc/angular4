import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increseQty = new EventEmitter<CartItem>();
  @Output() decreseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreseQty(item: CartItem){
    this.increseQty.emit(item);
  }

  emitDecreseQty(item: CartItem){
    this.decreseQty.emit(item);
  }

  emitRemove(item: CartItem){
    this.remove.emit(item);
  }


}

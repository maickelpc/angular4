import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import { Order, OrderItem } from './order.model';
import { MEAT_API } from '../app.api';



@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http:Http){}

  cartItems(): CartItem[]{
    return this.cartService.items;
  }

  increseQty(item: CartItem){
    this.cartService.increseQty(item);
  }

  decreseQty(item: CartItem){
    this.cartService.decreseQty(item);
  }

  remove(item: CartItem){
    this.cartService.removeItem(item);
  }

  itemsValue():number{
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<Order>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("Order");

    return this.http.post(
      `${MEAT_API}/orders`,  //url
      JSON.stringify(order),  //Json do body
      new RequestOptions({headers: headers})) //headers
      .map(response => response.json())
      .map(order => order.id);
  }

  clear(){
    this.cartService.clear();
  }

}

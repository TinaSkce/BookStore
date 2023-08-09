import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/modules/cart';
import { CartItem } from '../shared/modules/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;
  constructor(private cartService: CartService){
    this.setCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.book.id);
    this.setCart(); //to refresh
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.book.id, quantity);
    this.setCart();
  }

  calculateTotalQuantity(): number {
    let totalQuantity = 0;
    if (this.cart && this.cart.items) {
      for (const cartItem of this.cart.items) {
        totalQuantity += cartItem.quantity;
      }
    }
    this.setCart();
    return totalQuantity;
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
    
  }

}

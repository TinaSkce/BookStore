import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/modules/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book/book.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  showCartMessage = false;
  book!:Book;

  constructor(private activatedRoute: ActivatedRoute, 
    private bookService: BookService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.book = this.bookService.getBookById(params['id']);
    })
  };
  ngOnInit(): void {
    
  };

  addToCart(){
    this.cartService.addToCart(this.book);
    //this.router.navigateByUrl('cart-page');
    this.showCartMessage = true;

    setTimeout(() => {
      this.showCartMessage = false;
    }, 3000);
  }

}

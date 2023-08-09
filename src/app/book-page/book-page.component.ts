import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/modules/book';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BookService } from '../services/book/book.service';
import { CartService } from '../services/cart/cart.service';
import { filter } from 'rxjs/operators';

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

    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });
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

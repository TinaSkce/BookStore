import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../shared/modules/book';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  books: Book[] = [];
  constructor(private bookService: BookService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.books = this.bookService.getAllBooksBySearchTerm(params['searchTerm']);
        } else if (params['tag']){
          this.books = this.bookService.getAllBooksByTag(params['tag']);
        } else {
          this.books = this.bookService.getAll();
        }
    })
  }
}

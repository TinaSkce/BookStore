import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/modules/tag';
import { BookService } from '../services/book/book.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  @Input()
  bookPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?: Tag[];

  constructor(private bookService: BookService){};

  ngOnInit(): void {
    if(!this.bookPageTags)
    this.tags = this.bookService.getAllTags();
  }

}

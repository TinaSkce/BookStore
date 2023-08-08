import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/modules/tag';
import { BookService } from '../services/book/book.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  tags: Tag[]=[];

  constructor(private bookService: BookService){};

  ngOnInit(): void {
    this.tags = this.bookService.getAllTags();
  }

}

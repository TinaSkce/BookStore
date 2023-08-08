import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/modules/book';
import { Tag } from 'src/app/shared/modules/tag';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAllBooksByTag(tag: string): Book[] {
    if(tag == "All")
      return this.getAll();
    else
      return this.getAll().filter(book => book.tags?.includes(tag));
  }

  getAllBooksBySearchTerm(searchTerm: string): Book[]{
    return this.getAll().filter(book => 
      book.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      {name: 'All', count:11},
      {name: 'fantasy', count:10},
      {name: 'test', count:1}
    ]
  }

  getAll():Book[]{
    return [
    {
      id: 1,
      name: 'A court of thorns and roses',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/first.jpg',
    },
    {
      id: 2,
      name: 'A court of mist and fury',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/second.jpg',
    },
    {
      id: 3,
      name: 'A court of wings and ruin',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['test'],
      favourite: false,
      imageUrl: '/assets/images/third.jpg',
    },
    {
      id: 4,
      name: 'A court of frost and starlight',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/fourth.jpg',
    },
    {
      id: 5,
      name: 'A court of silver flames',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/fifth.jpg',
    },
    {
      id: 6,
      name: 'Crown of midnight',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/sixth.jpg',
    },
    {
      id: 7,
      name: 'Throne of Glass',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/seventh.jpg',
    },
    {
      id: 8,
      name: 'Heir of fire',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/eigth.jpg',
    },
    {
      id: 9,
      name: 'Queen of shadows',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/nineth.jpg',
    },
    {
      id: 10,
      name: 'Empire of storms',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/tenth.jpg',
    },
    {
      id: 11,
      name: 'The assassins blade',
      author: 'Sarah J. Maas',
      price: 39.99,
      tags:['fantasy'],
      favourite: false,
      imageUrl: '/assets/images/eleventh.jpg',
    }
    ]
  }
}

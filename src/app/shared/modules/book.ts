export class Book{
    id!:number;
    name!: string;
    author!:string;
    price!:number;
    tags?:string[];
    stars:number = 0;
    imageUrl!: string;
    description!:string;
    publisher!: string;
    numberOfPages?:number;
    binding?:string;
}
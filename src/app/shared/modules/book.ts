export class Book{
    id!:number;
    name!: string;
    author!:string;
    price!:number;
    tags?:string[];
    favourite:boolean = false;
    imageUrl!: string;
    description!:string;
    publisher!: string;
    numberOfPages?:number;
    binding?:string;
}
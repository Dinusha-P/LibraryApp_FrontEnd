import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { BookModel } from './book.model';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title: String="Books List";
  //Product is the model class for a product item
  books: BookModel[]=[];
  imageWidth: number =50;
  imageMargin: number =2;
  //creating service object for calling getproducts

  constructor(private router:Router,private bookService:BookserviceService, public _auth:AuthService) { }

  ngOnInit(): void {
    //calling getbooks() and loading the products to books array
    this.bookService.getBooks().subscribe((data)=>{
      this.books =JSON.parse(JSON.stringify(data));
    })
  }
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
      })
    }

}

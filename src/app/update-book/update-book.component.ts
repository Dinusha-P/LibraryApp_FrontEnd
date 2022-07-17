import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private bookService: BookserviceService, private router: Router) { }
  bookItem={
    bookId:'',
    bookName:'',
    Author:'',
    description:'',
    imageUrl:''
  }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
    this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookService.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}

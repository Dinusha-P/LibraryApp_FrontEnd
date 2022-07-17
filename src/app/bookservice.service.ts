import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }
  newBook( item:any){
    return this.http.post("http://localhost:5000/insert",{"book":item})
    .subscribe(data=>{console.log(data)})
  }
  getBook(id:any){
    return this.http.get("http://localhost:5000/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:5000/books")
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:5000/remove/"+id)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:5000/update",book)
    .subscribe(data =>{console.log(data)})
  }
}

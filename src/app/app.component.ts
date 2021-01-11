import { BookService } from './book.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Show Book';
  allBooks;
  books;
  filter:any ={};

  constructor(){
    let service = new BookService();
    this.allBooks = service.getBook();
    this.books = this.allBooks;
  }

onSubmit(){
    var books = this.allBooks;
     if(this.filter.search){
      books = books.filter(v => v.title == this.filter.search);
     }
      this.books = books;
  }
}

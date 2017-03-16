import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BookService } from './../book.service';
import { Book } from '../book'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book = new Book('new book');

  constructor(
      private bookService: BookService,
      private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.bookService.save(this.book)
      .subscribe(
        response => {
          console.log(response); 
          this.router.navigate(['']); 
        }
      );
  }

}

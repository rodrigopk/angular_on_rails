import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getList(){
    return this.http.get('/api/books.json');
  }

  delete(book) {
    return this.http.delete('/api/books/' + book.id + '.json');
  }


  save(_book){
    let body = JSON.stringify({ book:_book });
    let headers = new Headers({ 'Content-type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api/books.json', body, options);
  }

}

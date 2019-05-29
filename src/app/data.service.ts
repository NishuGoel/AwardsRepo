import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Document} from './document';
import {DocumentData} from './document.service';
import { throwError, of, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { DocumentDetails } from './documentdetails';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/documents';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  

  constructor(private http: HttpClient) { }  

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }

  getDocuments(): Observable<object> {


    return this.http.get('http://agile-award-insights-2.w3ibm.mybluemix.net/v2/document').pipe(
      tap(data => console.log(data)));
    //const url = `${this.apiurl}`;
   // return this.http.get<Document[]>(url).pipe(
     // tap(data => console.log(data)),
      //catchError(this.handleError)
    //);
  }

  getDocument(id: number): Observable<DocumentDetails>{
    const url = `${this.apiurl}/${id}`;
    return this.http.get<DocumentDetails>(url).pipe(
    catchError(this.handleError)
    );
  }

  addDocument(document: DocumentDetails): Observable<DocumentDetails>{
    document.id=null;
    return this.http.post<DocumentDetails>(this.apiurl, document, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  updateDocument(document: DocumentDetails): Observable<DocumentDetails>{
    const url = `${this.apiurl}/${document.id}`;
    return this.http.put<DocumentDetails>(this.apiurl, document, this.httpOptions).pipe(
      map(() => document),
      catchError(this.handleError)
    );
  }
}
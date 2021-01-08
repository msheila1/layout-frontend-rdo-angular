import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  endpoint = environment.services.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  list(url: string, pathParam: string): Observable<any> {
    return this.http.get(this.endpoint + url + pathParam).pipe(
      map(this.extractData));
  }  

  get(url: string, options?: {}): Observable<any> {

    let params = new URLSearchParams();
    for(let key in options){
        params.set(key, options[key]) 
    }

    return this.http.get(this.endpoint + url + '?' + params.toString()).pipe(
      map(this.extractData));
  }

  getOnUrl(url: string, options: {}): Observable<any> {

    let params = new URLSearchParams();
    for(let key in options){
        params.set(key, options[key]) 
    }

    return this.http.get(url + '?' + params.toString()).pipe(
      map(this.extractData));
  }

  postOnUrl(url: string, body: string, httpOptions?): Observable<any> {
    this.http.post<any>(url, body, httpOptions).subscribe(postResult => {
      return postResult;
    });

    return null;
  }

  //TODO: REFAZERRR apenas para testes
  postOnUrl2(url: string, body: any): Observable<any> {
    return this.http.post<any>(url, body, this.httpOptions);
  }
  //TODO: REFAZERRR apenas para testes

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      //console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

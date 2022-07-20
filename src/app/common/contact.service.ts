import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  //private api = 'https://mailthis.to/Sonko'
  private api = 'https://formsubmit.co/448147e1d6152ef53c69891219c17f48'
 
  constructor(private http: HttpClient) { }

  PostMessage(input: string) {
    return this.http.post(this.api, input, {responseType: 'text' }).pipe(
 map(
        (response) => {
          if (response) {
            return response;
          }
        }, (error: string) => {
          return error;
        }
      )
    )
  }

}

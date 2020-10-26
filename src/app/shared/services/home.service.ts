import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError, Subject } from "rxjs";
import { catchError, map, timeout } from "rxjs/operators";

import { AppSettings } from '../../config';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  API_URL = AppSettings.apiUrl;

  constructor(private http: HttpClient) { }

  // Handle HttpErrorResponse -
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  // Getting hotel details -
  getDetails() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "3c97535fc4116f636a52ee31593e5fe2e2cefea1"
        // Authorization: "Bearer " + "3c97535fc4116f636a52ee31593e5fe2e2cefea1"
      })
    };

    return this.http.get<any>(this.API_URL + "booking/hotel_inventory/", httpOptions)
      .pipe(catchError(this.handleError));
  }

}

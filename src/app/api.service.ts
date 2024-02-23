import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, map, retry } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  hosturl = environment.url;
  apiUrl: any = this.hosturl + '/api/v1/employees';

  constructor(private http: HttpClient) {}

  // getData():any{
  //  return this.http.get(this.apiUrl).pipe(
  //   catchError((error:HttpErrorResponse)=>{
  //     let errorMessage = '';
  //       if (error.error instanceof ErrorEvent) {
  //         // Client-side error
  //         errorMessage = `Error: ${error.error.message}`;
  //       } else {
  //         // Server-side error
  //         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //       }
  //       console.error(errorMessage);
  //       return throwError(errorMessage);

  //   })
  //  );

  // }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {
        return res;
      }),
      retry(3),
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      })
    );
  }

  searchData(searchText: string): Observable<any[]> {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(
        map((data) =>
          data.filter((item) =>
            item.employee_name.toLowerCase().includes(searchText.toLowerCase())
          )
        )
      );
  }
}

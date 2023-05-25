import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MessageService {
  prefixe: string;

      constructor(private http: HttpClient) {this.prefixe='http://localhost:3000/api/'}

      sendData(fin: string, data: any, ): Observable<any>{
        const url = this.prefixe + fin;
        return this.http.post<any>(url,data);
      }
      getData(fin: string, data: any, ): Observable<any>{
      const params = new HttpParams({fromObject: data});
      const url = this.prefixe + fin;
          return this.http.get<any>(url, { params });
    }
  }
  

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getdata():Observable<any>{
   return this.http.get('https://www.ag-grid.com/example-assets/row-data.json'); 
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  fetchData() {
    // this.sharedData = data;
    // return this.http.get<any>(`../../json/data.json`);
  }
  
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  jsonData:any={Sheet1:[]};

  constructor(private http: HttpClient) { }

  getAllCountry(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getJsonData():Observable<any>{
    return of(this.jsonData.Sheet1)
  }
}

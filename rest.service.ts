import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Products} from './Products';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  eUrl:any="http://localhost:3000/Earrings";
  bUrl:any="http://localhost:3000/Bracelets";
  rUrl:any="http://localhost:3000/Rings";
  nUrl:any="http://localhost:3000/Necklaces";

  constructor(private http:HttpClient) { }
    getEarrings():Observable<any>{
      
      return this.http.get<any>(this.eUrl);
    }
    getBracelates():Observable<any>{
      return this.http.get<any>(this.bUrl);
    }
    getRings():Observable<any>{
      return this.http.get<any>(this.rUrl);
    }
    getNacklaces():Observable<any>{
      return this.http.get<any>(this.nUrl);
    }
    getSingleEarrings(id:any):Observable<any>{
      return this.http.get<any>(this.eUrl + "/"+ id)
    }
    getSingleNecklace(id:any):Observable<any>{
      return this.http.get<any>(this.nUrl + "/" + id)
    }
    getSingleRings(id:any):Observable<any>{
      return this.http.get<any>(this.rUrl + "/" + id)
    }
    getSingleBracelet(id:any):Observable<any>{
      return this.http.get<any>(this.bUrl + "/" + id)
    }
  }
  
  


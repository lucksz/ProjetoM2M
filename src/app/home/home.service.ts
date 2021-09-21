import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getPokedex(): Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`);
  }
  getPokemon(nome:any): Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  }
}

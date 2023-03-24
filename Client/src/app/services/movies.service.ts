import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  obtenermovies(idpage:any){
    return this.http.get(`${environment.API_URL}/movie/popular?${environment.API_KEY}&language=es-MX&page=${idpage}`);
  }

}

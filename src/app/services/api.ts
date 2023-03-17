import { HttpClient } from '@angular/common/http';



export class ServiceAPI {

  constructor(private http: HttpClient) { }

  ObtenerPeliculas() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc`);

  }

}
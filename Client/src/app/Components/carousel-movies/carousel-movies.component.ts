import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-carousel-movies',
  templateUrl: './carousel-movies.component.html',
  styleUrls: ['./carousel-movies.component.css']
})
export class CarouselMoviesComponent implements OnInit {
  topSeries:any = []
  constructor(private moviesService:MoviesService){}

  ngOnInit(): void {
      this.gettopSeries()
  }
  gettopSeries(){
    this.moviesService.obtenertopseries().subscribe((resTopSeries:any)=>{
      resTopSeries.results.forEach((element:any) => {
        if(element.backdrop_path != null && element.overview != ""){
          this.topSeries.push(element)
        }
      });
      this.topSeries = this.topSeries.slice(0,4)
      console.log(this.topSeries)
    },
      err => console.error(err))
  }


}

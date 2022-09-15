import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.getMoviesTrend();
    this.getMoviesTheater();
    this.getMoviesPopular();

  }

  getMoviesTheater(){
    this.http.get('https://franjimenezq.github.io/movie-Angular-App/assets/data/movies-theatre.json')
    .subscribe((movie) => {
      this.theatreMovies = movie;
      console.log(this.theatreMovies)
    });
  }

  getMoviesTrend(){
    this.http.get('https://franjimenezq.github.io/movie-Angular-App/assets/data/movies-trending.json')
    .subscribe((movie) => {
      this.trendMovies = movie;
      console.log(this.trendMovies)
    });
  }

  getMoviesPopular(){
    this.http.get('https://franjimenezq.github.io/movie-Angular-App/assets/data/movies-popular.json')
    .subscribe((movie) => {
      this.popularMovies = movie;
      console.log(this.popularMovies)
    });
  }

  goToMovie(type: string, id: string){
    this.router.navigate(['movie', type, id]);
  }
}

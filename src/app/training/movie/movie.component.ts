import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  type = '';
  id = '';
  movieURL = '';
  movies: any;
  movie: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if(this.type === 'trending'){
      this.movieURL = 'http://localhost:4200/assets/data/movies-trending.json'
    }
    if(this.type === 'theatre'){
      this.movieURL = 'http://localhost:4200/assets/data/movies-theatre.json'
    }
    if(this.type === 'popular'){
      this.movieURL = 'http://localhost:4200/assets/data/movies-popular.json'
    }
    this.getMovie();
  }


  getMovie(){
    this.http.get(this.movieURL).subscribe((movies)=> {
      this.movies = movies;
      let index = this.movies.findIndex((movie: {id:string}) => movie.id == this.id);
      if(index > -1){
        this.movie = this.movies[index];
      }
    });

  }
}

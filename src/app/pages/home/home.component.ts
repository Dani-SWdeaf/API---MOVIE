import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private apiMovies: MoviesService) {}

  getMovie() {
    this.apiMovies.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
  }

  getUpcomingMovie() {
    this.apiMovies.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }

  getTopRatedMovie() {
    this.apiMovies.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
  }

  ngOnInit(): void {
    this.getMovie();
    this.getUpcomingMovie();
    this.getTopRatedMovie();
  }
}

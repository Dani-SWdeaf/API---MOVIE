import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { Movie, MoviesDto } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url: string = 'https://api.themoviedb.org/3';
  apiKey: string = '81537c072b41b40f415a20b9a376fce6';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MoviesDto>(`${this.url}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.url}/movie/${id}?api_key=${this.apiKey}`);
  }

  searchMovies(page: number) {
    return this.http.get<MoviesDto>(`${this.url}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getTvs(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MoviesDto>(`${this.url}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }
}

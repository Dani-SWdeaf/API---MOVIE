import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { GenresDto } from '../models/genre';
import { Movie, MoviesDto, MovieVideoDto, MovieImages, MovieCredits } from '../models/movie';

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

  getMovieVideo(id: string) {
    return this.http.get<MovieVideoDto>(`${this.url}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovieGenres() {
    return this.http.get<GenresDto>(`${this.url}/genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MoviesDto>(`${this.url}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.url}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.url}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getMovieSimilar(id: string) {
    return this.http.get<MoviesDto>(`${this.url}/movie/${id}/similar?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.filter((movie) => movie.backdrop_path !== null).slice(0, 6));
      })
    );
  }

  searchMovies(page: number, searchValue?: string) {
    const url = searchValue ? '/search/movie' : '/movie/popular';
    return this.http.get<MoviesDto>(`${this.url}${url}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`).pipe(
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

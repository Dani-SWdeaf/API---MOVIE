import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZE } from '../../constants/images-sizes';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() itemData: Movie | null = null;

  imagesSizes = IMAGES_SIZE;

  constructor(private apiMovies: MoviesService) {}
}

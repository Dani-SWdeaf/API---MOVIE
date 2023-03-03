import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IMAGES_SIZE } from '../../constants/images-sizes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
  // animations: [trigger('sliderFade', [state('void', style({opacity: 0}), transition('void <=> *', [animate('1s')]))])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;

  currentSlideIndex: number = 0;

  readonly imagesSizes = IMAGES_SIZE;

  constructor(private apiMovies: MoviesService) {}

  ngOnInit(): void {
    if (this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}

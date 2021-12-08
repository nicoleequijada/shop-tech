import { Component, OnInit } from '@angular/core';
import { dataCarousel } from 'src/utils/Datacarousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  

  constructor() { }
  dataCarousel = dataCarousel;
  ngOnInit(): void {
  }

}



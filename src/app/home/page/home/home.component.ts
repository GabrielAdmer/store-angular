import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from '../../../product/Interface/product.interface';
import { map } from 'rxjs/operators';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

  products: Product[] = []


  isLoading: boolean;
  backdrops: string[];
  showCustomArrows: boolean;
  showArrows: boolean;
  showBullets: boolean;
  arrowLeftLabel: string;
  arrowRightLabel: string;
  type: any;
  startAt: number;
  perView: number;
  focusAt: number | string;
  gap: number;
  autoplay: number | boolean;
  hoverpause: boolean;
  keyboard: boolean;
  bound: boolean;
  swipeThreshold: number | boolean;
  dragThreshold: number | boolean;
  perTouch: number | boolean;
  touchRatio: number;
  touchAngle: number;
  animationDuration: number;
  rewind: boolean;
  rewindDuration: number;
  animationTimingFunc: string;
  direction: string;
  // classes: object;
  isCenter: boolean;
  isAutoplay: boolean;
  isSwipeThreshold: boolean;
  isDragThreshold: boolean;
  isPerTouch: boolean;
  logs: { event: string, data?: object }[];

  constructor( private productService: ProductService ) {

    this.isLoading = true;
    this.backdrops = [];
    this.logs = [];
    this.showCustomArrows = false;
    this.showArrows = true;
    this.showBullets = true;
    this.arrowLeftLabel = '<';
    this.arrowRightLabel = '>';
    this.type = 'carousel';
    this.startAt = 0;
    this.perView = 4;
    this.isCenter = false;
    this.focusAt = 0;
    this.gap = 20;
    this.isAutoplay = true;
    this.autoplay = 2000;
    this.hoverpause = true;
    this.keyboard = true;
    this.bound = false;
    this.isSwipeThreshold = true;
    this.swipeThreshold = 80;
    this.isDragThreshold = true;
    this.dragThreshold = 120;
    this.isPerTouch = false;
    this.perTouch = 3;
    this.touchRatio = 0.5;
    this.touchAngle = 45;
    this.animationDuration = 400;
    this.rewind = true;
    this.rewindDuration = 800;
    //this.animationTimingFunc = 'cubic-bezier(0.165, 0.840, 0.440, 1.000)';
    this.animationTimingFunc = 'ease';
    this.direction = 'ltr'

  }


  images: string[] = []

  ngOnInit (): void {
    this.allProducts()
  }

  allProducts () {
    this.productService.getProducts()
      .pipe(
        map( item => item.map( item => item.image ) )
      )
      .subscribe( products => {
        this.backdrops = products
        this.isLoading = false
      } )
  }



}

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CourseDto } from './models/course.model';
import {CommonModule} from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {

  @ViewChild('coursesCarousel') carouselElement!: ElementRef;
  private bsCarousel: any;

  ngAfterViewInit() {
    // Inicializamos el componente Carousel nativo de Bootstrap mediante JS
    if (this.carouselElement) {
      this.bsCarousel = new bootstrap.Carousel(this.carouselElement.nativeElement, {
        interval: false // Desactiva el auto-slide si no lo quieres corriendo solo
      });
    }
  }

  nextSlide() {
    if (this.bsCarousel) {
      this.bsCarousel.next();
    }
  }

  prevSlide() {
    if (this.bsCarousel) {
      this.bsCarousel.prev();
    }
  }

  courses: CourseDto[] = [
    {
      id: 1,
      name: 'Introduction to Angular',
      instructor: 'John Doe',
      isActive: true,
    },
    {
      id: 2,
      name: 'Advanced TypeScript',
      instructor: 'Jane Smith',
      isActive: false,
    },
    {
      id: 3,
      name: 'Web Development with Angular',
      instructor: 'Alice Johnson',
      isActive: true,
    },
    {
      id: 4,
      name: 'Reactive Programming with RxJS',
      instructor: 'Bob Brown',
      isActive: true,
    },
    {
      id: 5,
      name: 'State Management with NgRx',
      instructor: 'Charlie Davis',
      isActive: false,
    }
  ]
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Course } from './components/course/course';
import { Baner } from './components/baner/baner';
import { Footer } from './components/footer/footer';
import { CourseDto } from './components/course/models/course.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Course, Footer, Baner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('stin-play');
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
    },
  ];

  handleCourseCreated(course: CourseDto): void {
    const id = Math.max(0, ...this.courses.map((c) => c.id)) + 1;
    this.courses = [...this.courses, { ...course, id }];
  }
}

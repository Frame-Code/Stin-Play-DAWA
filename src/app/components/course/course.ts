import { Component } from '@angular/core';
import { CourseDto } from './models/course.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
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

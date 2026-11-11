import { Component, Input } from '@angular/core';
import { CourseDto } from './models/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  @Input() courses: CourseDto[] = [];
}

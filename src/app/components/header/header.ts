import { Component, EventEmitter, Output } from '@angular/core';
import { FormCourse } from '../course/form-course/form-course';
import { CommonModule } from '@angular/common';
import { CourseDto } from '../course/models/course.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormCourse],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mostrarModal: boolean = false;
  title: string = 'Stin Play';
  subtitle: string = 'Tu plataforma de cursos online en la cual puedes confiar!';

  @Output() courseCreated = new EventEmitter<CourseDto>();

  handleCourseCreated(course: CourseDto): void {
    this.courseCreated.emit(course);
  }
}

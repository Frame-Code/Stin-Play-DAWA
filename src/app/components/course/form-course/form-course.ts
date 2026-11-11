import { Component, EventEmitter, Output } from '@angular/core';
import { CourseDto } from '../models/course.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-course',
  imports: [FormsModule],
  templateUrl: './form-course.html',
  styleUrl: './form-course.css',
})
export class FormCourse {
  @Output() cerrarModal = new EventEmitter<any>();
  @Output() courseCreated = new EventEmitter<CourseDto>();

  course: CourseDto = {
    id: 0,
    name: '',
    instructor: '',
    isActive: true,
  }

  addCourse(): void {
    if (!this.course.name && !this.course.instructor) {
      alert('Por favor, complete todos los campos del formulario antes de agregar el curso.');
      return;
    }

    this.courseCreated.emit(this.course);
    this.cerrarModal.emit();
    
    this.course = {
      id: 0,
      name: '',
      instructor: '',
      isActive: true,
    };
  }
}

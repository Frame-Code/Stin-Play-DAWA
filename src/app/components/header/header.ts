import { Component } from '@angular/core';
import { FormCourse } from '../course/form-course/form-course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormCourse],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mostrarModal: boolean = false;
  title: string = 'Stin Play'
  subtitle: string = 'Tu plataforma de cursos online en la cual puedes confiar!'
}

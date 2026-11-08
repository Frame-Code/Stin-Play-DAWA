import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import {Course} from './components/course/course';
import { FormCourse } from './components/course/form-course/form-course';
import { Baner } from './components/baner/baner';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Course, FormCourse, Footer, Baner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stin-play');
}

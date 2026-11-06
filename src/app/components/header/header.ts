import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title: string = 'Stin Play'
  subtitle: string = 'Tu plataforma de cursos online en la cual puedes confiar!'
}

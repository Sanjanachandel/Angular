import { Component, signal } from '@angular/core';
import { Sedan } from './sedan/sedan';
import { Luxury } from './luxury/luxury';
import { Suvs } from './suvs/suvs';
@Component({
  selector: 'app-root',
  imports: [Sedan,Luxury,Suvs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task01');
}

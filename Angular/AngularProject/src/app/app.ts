import { Binding } from './binding/binding';
import { Component  } from '@angular/core';
import { home } from './Home/home';
import { Nav } from './nav/nav';
import { Parent } from "./parent/parent";

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // template:`<h1>hello</h1>
  // <button>submit</button>`,
  // styles:`h1{
  //   color:red;
  // }`

  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [home, Nav, Binding, Parent]
})
export class App {
  // protected readonly title = signal('AngularProject');
}

import { form } from '@angular/forms/signals';
import { Binding } from './binding/binding';
import { Component ,inject } from '@angular/core';
import { home } from './Home/home';
import { Nav } from './nav/nav';
import { Parent } from "./parent/parent";
import { Forms } from "./forms/forms";
import { DataService } from './data-service/data-service';
import { Dashboard } from './dashboard/dashboard';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';


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
  imports: [RouterOutlet, RouterLinkWithHref]
})
export class App {
  // protected readonly title = signal('AngularProject');
    route=inject(Router);
    change:boolean=true
    login(){
      if(this.change){
        this.route.navigate(['/home']);
        console.log(this.route.url);
        this.change=false;
      }
      else{
        this.route.navigate(['/form'])
        console.log(this.route.url);
        this.change=true;
      }
    }

}

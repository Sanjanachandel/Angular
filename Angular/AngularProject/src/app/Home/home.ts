import { Component } from "@angular/core";
import { About } from "./about/about";
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
@Component({
  selector:'app-home',
  templateUrl:'./home.html',
  styleUrl:'./home.css',
  imports: [ RouterOutlet, RouterLinkWithHref]
})
export class home{};

import { Component } from "@angular/core";
import { About } from "./about/about";
@Component({
  selector:'app-home',
  templateUrl:'./home.html',
  styleUrl:'./home.css',
  imports: [About]
})
export class home{};

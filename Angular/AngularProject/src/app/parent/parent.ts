import { Component } from '@angular/core';
import { Child } from './child/child';


@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  dataforchild : string="hello"
  val:any
  count: number=100;
  arr=[1,2,3,4,5];
  childEvent(a:any)
  {
    this.val=a;
  }
}

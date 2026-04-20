import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() data!:string
  @Input() val:number=0
  @Input() arr: Array<number>= [];
}

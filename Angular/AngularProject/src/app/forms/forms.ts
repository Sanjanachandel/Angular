import { Component } from '@angular/core';
import { Templatedrivenform } from "./templatedrivenform/templatedrivenform";
import { ReactiveForms } from './reactive-forms/reactive-forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveForms],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  val:string=''
  handleChange()
  {
    console.dir('value changed');
    console.log(this.val);
  }
}

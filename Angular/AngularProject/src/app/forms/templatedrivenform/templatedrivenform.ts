import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  imports: [FormsModule],
  templateUrl: './templatedrivenform.html',
  styleUrl: './templatedrivenform.css',
})
export class Templatedrivenform {
 userName = '';
  passWord = '';
  handleSubmit(para:NgForm){
    console.log(para);
    console.log(para.value);
  }

}


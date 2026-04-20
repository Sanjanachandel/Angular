import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class Binding {
  user = "sanjana";
  obj ={
    user:"sana",
    age:22,
    city:"pune"
  }
  data(){
    return `welcome to angular ${this.obj.user}`;
  }
  arr=[1,2,3,4,5];
  result=true;
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsHxhKzvUuMYDEodd5ezis-_oAcKJrAtEdO2gsavqZ53abFF1";
inputValue:string="";
count=0;
handleClick(data:boolean){
  if(data){
    console.log("login success");
  }
  else{
    console.log("wrong input");
  }
  console.log("event clicked");
  this.count++;
}
SecondClick(){
  console.log("second clicked");

}
handelInput(event:any)
{

  this.inputValue=event.target.value;
  console.log(event.target.value);
 // console.log(event);
}
inputData:string="";
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // val1:string="hello parent"
  // obj ={
  //   id:1,
  //   username:"sanjana",
  //   lastname:"chandel"

  // }
  // @Input() data!:string
  // @Input() val:number=0

  // @Input() arr: Array<number>= [];

  // @Output() childData=new EventEmitter();
  // result()
  // {
  //   this.childData.emit(this.obj);
  // }
  //Directives : attribute ->ngclass
  active:boolean=false;
  change:boolean=true;
  toggle()
  {
    this.active=!this.active;
    this.change=!this.change;

  }
  col='red';
  bg='green';
  fstyle=true;
  css={
    color:'red',
    backgroundColor:'blue'
  }
  css1={
    color:'pink',
    backgroundColor:'green'
  }

  // Structural : ngIf
  handelChange()
  {
    this.fstyle=!this.fstyle;
  }
login:boolean=true
handleLogin(a:any)
  {
    this.login=a;
  }

  arr=["Java","C","Cpp","Angular","Prateek","Sanjana"];
  user:string="admin";


  date=new Date()
  username:string="Anishuuu Betuuu"
  price:number=100;
  userData={
    id:1,
    fistName:"Sanjana",
    lastName:"Chandel",
    age:22,
    address:{
      state:"Hp",
      city:"Naina devi"
    }
  }
}

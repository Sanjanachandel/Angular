import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';


@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  // username=new FormControl('')
  // password=new FormControl('')
  // onSubmit()
  // {
  //   console.log(this.username);
  // }
  logIn =new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    passWord:new FormControl('',[Validators.required])
  })
  getValue()
  {
    console.log(this.logIn);
    console.log(this.logIn.value);
  }
  regForm=new FormGroup({
    fName:new FormControl('abc',[Validators.required,Validators.maxLength(5)]),
    lName:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    phno:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('',[Validators.required]),
    sel:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    code:new FormControl('',[Validators.required]),
    date1:new FormControl('',[Validators.required]),
  })

  getValue1()
  {
    console.log(this.regForm);
    this.regForm.get('fName')?.setValue('abc');
  }
  enableField(){
    this.regForm.get('phno')?.enable();
  }
  disableField(){
    this.regForm.get('phno')?.disable();
  }
  lNameField()
  {
    if(this.regForm.get('lName')?.valid)
    {
      this.regForm.get('phno')?.enable();
    }
    else{
      this.regForm.get('phno')?.disable();
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  person={
    id:1,
    FirstName:"Anish",
    LastName:"Sinha",
    age:22,
    address:{
      state:"Jharkhand",
      city:"giridih"
    }

  };
}

import { Component, inject } from '@angular/core';
import { Count } from '../Services/count';
import { User } from '../Services/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data-service',
  imports: [JsonPipe],
  templateUrl: './data-service.html',
  styleUrl: './data-service.css',
})
export class DataService {
  constructor(public data:Count){}
  userData=inject(User);
}

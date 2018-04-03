import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name='Atharva....!!!';
  num1  = 11;
  num2 = 22;


displayDate = function(){
  return new Date();
}
}

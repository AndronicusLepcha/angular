import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'andronicus-app';
  count=0;
  number1=0;
  number2=90;
  result=0;
  ans=0;

  increment = () =>{
    this.count++;
  }
  decrement = () =>{
    this.count--;
  }
  add = () =>{
    this.result=Number(this.number1)+Number(this.number2);
  }

  listOfNumber=[12,4,2243,554,4];
  listOfNames=["qw","we","rrtet","rtrt"];
}

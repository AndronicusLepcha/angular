import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rollno',
  templateUrl: './rollno.component.html',
  styleUrls: ['./rollno.component.css']
})
export class RollnoComponent implements OnInit {

  randomroll: number=0;

  constructor() { }

  ngOnInit(): void {
  }
  //arrow function syntax
  generaterandomroll = () =>{
      this.randomroll=Math.ceil(Math.random() *89)
  }

}

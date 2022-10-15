import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randrom',
  templateUrl: './randrom.component.html',
  styleUrls: ['./randrom.component.css']
})
export class RandromComponent implements OnInit {
  
  randomNumber=0;

  constructor() { }

  ngOnInit(): void {
  }
  
  generateRandom=()=>{
    this.randomNumber=Math.random();
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-chunck-joke',
  templateUrl: './random-chunck-joke.component.html',
  styleUrls: ['./random-chunck-joke.component.css']
})
export class RandomChunckJokeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  randomjoke: string="";
  ngOnInit(): void {
  }

  getRandomjoke = () =>{
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe ((data: any) => this.randomjoke = data.value)
  }
}

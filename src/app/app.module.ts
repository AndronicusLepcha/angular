import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandromComponent } from './randrom/randrom.component';
import { RollnoComponent } from './rollno/rollno.component';
import { RandomChunckJokeComponent } from './random-chunck-joke/random-chunck-joke.component';
import {HttpClientModule} from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    RandromComponent,
    RollnoComponent,
    RandomChunckJokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandromComponent } from './randrom/randrom.component';
import { RollnoComponent } from './rollno/rollno.component';
<<<<<<< HEAD
import { RandomChunckJokeComponent } from './random-chunck-joke/random-chunck-joke.component';
import {HttpClientModule} from '@angular/common/http'; 
=======
>>>>>>> 6dc8572b29cb20bfc9410785ca6b3fee49ecd9c1

@NgModule({
  declarations: [
    AppComponent,
    RandromComponent,
<<<<<<< HEAD
    RollnoComponent,
    RandomChunckJokeComponent
=======
    RollnoComponent
>>>>>>> 6dc8572b29cb20bfc9410785ca6b3fee49ecd9c1
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

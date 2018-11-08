import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {DragulaModule , DragulaService} from "ng2-dragula"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule,
    FormsModule
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

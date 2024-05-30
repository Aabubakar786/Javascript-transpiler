import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, TextAreaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

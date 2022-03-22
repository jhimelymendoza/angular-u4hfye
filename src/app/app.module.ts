import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { NumericDirective } from './numeric.directive';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, TextMaskModule],
  declarations: [AppComponent, NumericDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}

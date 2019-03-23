import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component'
import { MiddleComponent } from './middle.component'
import { ParentComponent, MyDirective } from './parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent, MiddleComponent, ParentComponent, MyDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

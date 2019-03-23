import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit { 
  
  things = 'such'

  flag:boolean = true;

}

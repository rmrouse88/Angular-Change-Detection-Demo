import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, HostBinding, ViewContainerRef, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'child',
  template:
  `<div [ngClass]="counter % 2 === 0 ? getClass() : getOtherClass()"
  style="width:100px;height:100px; display:flex; flex-direction:column; justify-content:space-around;align-items:center">
    <button (click)="onClick()">Click Me</button>
    <div style="width:50%;height:50%;background:white;color:black">    
    {{ counter }}
  </div>
  `,
  styleUrls: ['child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements DoCheck{
  
  constructor(private cdr: ChangeDetectorRef,
              private vcr: ViewContainerRef){}
  
  counter:number = 0

  colorStyles=[
    {'background':'yellow'}, 
    {'background':'teal'}
  ]

  ngDoCheck(){  
  }  
  
  _val:string 

  @Input()
  set input(val){
    this._val = val;
  }

  get input():string{
    return this._val
  }

  getClass(){  
    return  {'special': true,
            'other-special': false}
  }

  getOtherClass(){
    return {'other-special': true,
            'special': false}
  }

  getBackground(){
    return {'background':'yellow'}
    setTimeout(() => {
      this.cdr.markForCheck();
    })   
  }

  onClick(){
    this.counter++
    this.cdr.markForCheck();    
  }
}


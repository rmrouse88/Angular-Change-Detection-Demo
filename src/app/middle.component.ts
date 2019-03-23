import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, HostBinding, DoCheck, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'middle',
  template:
  `
   
    <div [ngClass]="counter % 2 === 0 ? getClass() : getOtherClass()" [ngStyle]="myStyle()" style="width:250px;height:250px;display:flex;flex-direction: column;justify-content: space-around;align-items: center;
    border: solid black 5px;
    border-radius: 10px">

      <div style="width:60%;background:white;text-align:center">
      {{ counter }}
      </div>
                
      <div [ngStyle]="getCheck()" 
            style="width:100%;                  
                  display:flex;
                  flex-flow: row wrap;                  
                  justify-content: space-around;               
                  color:white">
        <child *ngFor="let child of children"></child>
      </div>
    </div>  
  `,
  styleUrls: ['middle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiddleComponent implements DoCheck{

  constructor( private vcr: ViewContainerRef,
                private cdr: ChangeDetectorRef){

  }

  colorStyles: any[] = [{'backround': 'orange'}, {'background':'brown'}, {'background':'lightblue'}]



  children: any[] = [1,2,3,4]   

  counter: number = 0

  ngDoCheck(){
    this.counter++
  }

  @HostBinding('style.background')
  background:string

  _id: string
  @Input()
  set id(val){   
    this._id = val;
  }

  get id():string{
    // debugger
    return this._id;
  }
  
  _checked:boolean;
  @Input()
  set checked(val){
    this._checked=val
  }

  getCheck(){
    return {
      'checked': this._checked
    }
  }


  getClass(){  
    return  {'special': true,
            'other-special': false}
  }

  getOtherClass(){
    return {'other-special': true,
            'special': false}
  }

  midAction():void{
    this.background = 'yellow'
    debugger;
  }

  myStyle(): any{
    // let selection = this.colorStyles[Math.floor(Math.random()*this.colorStyles.length)]
    // return selection
  }

}


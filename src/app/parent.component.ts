import { Component, Directive, ChangeDetectionStrategy, Input, HostBinding, ViewContainerRef, DoCheck } from '@angular/core';

@Component({
  selector: 'parent',
  template:
  `
  {{ title }}
  <div class="main-container" [ngClass]="counter % 2 === 0 ? getClass() : getOtherClass()" style="width: 100%;height:100%;padding:30px;border: solid black 5px; border-radius: 10px">
    <middle *ngFor = "let middle of middles" [id]="middle" [checked]="checked"></middle>  
  </div>
  `,
  styleUrls: ['parent.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements DoCheck{
  
  middles:any[]

  constructor(private vcr: ViewContainerRef){
    console.dir(this.vcr);
    this.middles = [1,2]
  }

  counter:number = 0 
  
  ngDoCheck(){
    this.counter++
    // console.log('parent do-check')
    // let temp = []
    // this.middles.forEach(el => {
    //   temp.push(el+1)
    // })      
    // this.middles = temp;    
  }

  get title(){    
    return 'Crappy Change Detection Tree'
  } 

  checked: boolean = false;

  @HostBinding('style.background')
  background:string

  @Input()
  set input(val){
    this.checked = true;
    this._val = val;
  }
  getClass(){  
    return  {'special': true,
            'other-special': false}
  }

  getOtherClass(){
    return {'other-special': true,
            'special': false}
  }

  get input():string{
    return this._val
  }

}

  

@Directive({
  selector: 'my-directive'
})
export class MyDirective{
  @Input()
  myThings: any;
}

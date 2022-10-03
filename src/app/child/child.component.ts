import {AfterContentInit, Component, DoCheck} from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
})
export class ChildComponent implements AfterContentInit , DoCheck{

  ngDoCheck() {
    console.log('ngDoCheck was invoked')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit  was invoked')
  }
}

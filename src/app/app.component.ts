import {Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  customDataFromParent = ''

  setCustomDataToChild() {
    let random = Math.floor(Math.random() * 10);
    this.customDataFromParent = 'Custom data from Parent Component ' + random;
  }
}

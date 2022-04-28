import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherwebsite';

s=true;





/* constructor() { this.fin() }
  fin(){
    for (let index = 0; index <= 20; index++) {
      console.warn(index)
      
    }
  }

 */

  show(){

    this.s=false
  }
}





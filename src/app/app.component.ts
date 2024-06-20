import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';

  Enttxt!:string;
  Entnum:number =0;

  getVal(){
    return "value";
  }

  num=3;
  class="testing";

  getName(a:string | number | boolean){
    alert('Try something!!!')
    console.log(a);
  }

  getData(){
    alert("keyup!!")
  }
  getData2(){
    alert("keydown!!")
  }

  getInfo(val:string){
    this.Enttxt = val;
  }

  increment(a:string){
    a=='plus'? this.Entnum++:this.Entnum--;
  }
 
  isdisable = !false;

  color='green';
  bcolor='yellow';

  data='Initial!';
  
}

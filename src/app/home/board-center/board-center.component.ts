import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-center',
  templateUrl: './board-center.component.html',
  styleUrl: './board-center.component.css'
})
export class BoardCenterComponent {

  add1 : boolean = false;add2 : boolean = false;add3 : boolean = false;
  btn1 : boolean = true;btn2 : boolean = true;btn3 : boolean = true;
  title1 : string = '';title2 : string = '';title3 : string = '';


  addColumn1() {
    this.add1 = true;
    this.btn1 = false;
  }
  addColumn2() {
    this.add2 = true;
    this.btn2 = false;
  }
  addColumn3() {
    this.add3 = true;
    this.btn3 = false;
  }
  



  criarcolumn1(){
    this.add1 = false;
    this.btn1 = false;
    console.log(this.title1);
  }
  criarcolumn2(){
    this.add2 = false;
    this.btn2 = false;
    console.log(this.title2);
  }
  criarcolumn3(){
    this.add3 = false;
    this.btn3 = false;
    console.log(this.title3);
  }
    
}

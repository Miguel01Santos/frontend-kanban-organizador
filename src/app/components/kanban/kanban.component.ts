import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})
export class KanbanComponent {
  card1: boolean = false;card2: boolean = false;card3: boolean = false;card4: boolean = false;card5: boolean = false;card6: boolean = false;

  btn1: boolean = true;btn2: boolean = false;btn3: boolean = false;btn4: boolean = false;btn5: boolean = false;btn6: boolean = false;

  seecard1(){
    this.card1 = true;
    this.btn1 = false;
    this.btn2 = true;
  }
  seecard2(){
    this.card2 = true;
    this.btn2 = false;
    this.btn3 = true;
  }
  seecard3(){
    this.card3 = true;
    this.btn3 = false;
    this.btn4 = true;
  }
  seecard4(){
    this.card4 = true;
    this.btn4 = false;
    this.btn5 = true;
  }
  seecard5(){
    this.card5 = true;
    this.btn5 = false;
    this.btn6 = true;
  }
  seecard6(){
    this.card6 = true;
    this.btn6 = false;
  }
}

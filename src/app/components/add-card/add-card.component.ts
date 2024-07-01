import { Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



interface Cards{
  title: string;
  team: string;
}


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})


export class AddCardComponent {

  constructor(){}
  ngOninit(){

  }
  

  todo = [''
  ];

  done = [''
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  private list: Array<Cards> = [];

  add(title: string, team: string) {
    this.list.push({ title, team });
    
  }

  remove(index: number){
    this.list.splice(index, 1);
  }

  getList(): Cards[] {
    return this.list;
  }

  card: boolean = false;
  btn: boolean = true;


  seeCard(){
    this.card = true;
    this.btn = false;
  }



}

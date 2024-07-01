import { Injectable } from '@angular/core';

interface Cards{
  title: string;
  team: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private list: Array<Cards> = [];

  constructor() { }

  add(title: string, team: string) {
    this.list.push({ title, team });
  }

  remove(index: number){
    this.list.splice(index, 1);
  }

  getList(): Cards[] {
    return this.list;
  }
}

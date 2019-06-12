import { Component, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-homeboard',
  templateUrl: './homeboard.component.html',
  styleUrls: ['./homeboard.component.css']
})
export class HomeboardComponent implements OnInit {
  addToDoTask: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  todo = [
    {title:'news-api',task:'UI modification'},
    {title:'online-store',task:'create again(data lost)'},
    {title:'trello',task:'refresh,login,firebase backend'}
  ];

  doing = [
    {title:'office',task:'work'},
    {title:'trello',task:'frontend'}
  ];

  done=[
    {title:'routing',task:'router-outlet,approuting module,between various components'},
    {title:'services',task:'getting data using subscribe and returning it'}
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

  saveItem(listType) {
    if(listType==='done') {
      this.done.push()
    }
  }


}


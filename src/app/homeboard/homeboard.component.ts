import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-homeboard',
  templateUrl: './homeboard.component.html',
  styleUrls: ['./homeboard.component.css']
})
export class HomeboardComponent{
  itemToDobutton:boolean=true;
  addToDoTask: boolean = false;
  
  itemDoingbutton:boolean=true;
  addDoingTask:boolean=false;

  itemDonebutton:boolean=true;
  addDoneTask:boolean=false;
  
  listType:String;
  toggletype:String;
  
  
  newTask = {
    title: '',
    task: ''
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
      
     if(this.newTask.title!='' && this.newTask.task!='')
     {this.done.push({title: this.newTask.title, task: this.newTask.task });
     this.itemDonebutton=true;
     this.addDoneTask=false;
     this.newTask = {
       title: '',
       task: ''
        }
      }
    }
    if(listType==='doing'){
      
      if(this.newTask.title!='' && this.newTask.task!='')
       {this.doing.push({title: this.newTask.title, task: this.newTask.task });
       this.itemDoingbutton=true;
       this.addDoingTask=false;
        this.newTask = {
          title: '',
          task: ''
        }
      
       }
       
    }
      if(listType==='todo'){
       
        if(this.newTask.title!='' && this.newTask.task!='')
        {
          this.todo.push({title: this.newTask.title, task: this.newTask.task });
         this.itemToDobutton=true;
         this.addToDoTask=false;
        this.newTask = {
          title: '',
          task: ''
        }
        }
        
       }

   }

    toggle(toggletype)
    {
      if(toggletype==='todo')
      {
        this.itemToDobutton=false;
        this.addToDoTask=true;
      }

      if(toggletype==='doing')
      {
        this.itemDoingbutton=false;
        this.addDoingTask=true;
      }

      if(toggletype==='done')
      {
        this.itemDonebutton=false;
        this.addDoneTask=true;
      }
    }


      
  }

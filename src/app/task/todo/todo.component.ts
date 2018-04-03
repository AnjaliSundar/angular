import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasklist = ["Do Your Works....","open The Door"];
  sometask = "Add Task Here.....";

  constructor() { }

  ngOnInit() {
  }
  addtask = function(){
console.log(this.sometask);
this.tasklist.push(this.sometask)
console.log(this.tasklist)
  }
  deletetask = function(ct){
    this.tasklist.splice(ct, 1)
  }
}

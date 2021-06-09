import { Task } from './../../models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] =[];

  ingresarTarea:string="";

  constructor() { }

  ngOnInit(): void {
    this.tasks=[
      {task_texto:"Comprar pan", task_completa:false},
      {task_texto:"Lavar la ropa", task_completa:false}
    ]
  }

  marcarTerminada(id:number){
    this.tasks.map((value, i) => {
      if(i == id) value.task_completa = !value.task_completa;
      return value;
    })
  }

  borrarTarea(id:number){
    this.tasks = this.tasks.filter((value, i) => i !== id);
  }

  anadirTarea(){
    this.tasks.push({
      task_texto:this.ingresarTarea, task_completa:false
    });
    this.ingresarTarea="";
  }

}

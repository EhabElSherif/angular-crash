import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Task } from './../../Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  icon = faTimes
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task|undefined){
    this.onDeleteTask.emit(task)
  }

  toggleReminder(task:Task|undefined){
    this.onToggleReminder.emit(task)
  }
}

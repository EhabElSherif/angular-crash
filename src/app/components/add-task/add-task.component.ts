import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text = ""
  day = ""
  reminder = false

  showForm: boolean|undefined
  subscription: Subscription
  
  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value=>this.showForm = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text) {
      alert("Please add a task")
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false
  }
}

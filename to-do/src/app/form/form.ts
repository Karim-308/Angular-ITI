import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  @Output() newTaskEvent = new EventEmitter<string>();
  task = '';
  addTask() {
    if (this.task.trim() !== '') {
      this.newTaskEvent.emit(this.task);
      this.task = '';
    }
  }
}

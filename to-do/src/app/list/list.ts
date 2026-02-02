import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-list',
  imports: [NgClass],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  @Input() todos: Array<{ id: number, title: string, completed: boolean }> = [];
  @Output() removeTodoEvent = new EventEmitter<number>();
  @Output() toggleTodoEvent = new EventEmitter<number>();
  removeTodo(id: number) {
    this.removeTodoEvent.emit(id);
  }
  toggleTodo(id: number) {
    this.toggleTodoEvent.emit(id);
  }
}

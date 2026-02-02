import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Form } from '../form/form';
import { List } from '../list/list';
@Component({
  selector: 'app-wrapper',
  imports: [Form, List],
  templateUrl: './wrapper.html',
  styleUrl: './wrapper.css',
})
export class Wrapper {
  todos: Array<{ id: number, title: string, completed: boolean }> = [];
  quackSound: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.quackSound = new Audio('/assets/sounds/quack.mp3');
    }
  }

  playQuack() {
    if (this.quackSound) {
      this.quackSound.currentTime = 0;
      this.quackSound.play();
    }
  }

  addTodo(title: string) {
    this.todos.push({ id: Date.now(), title, completed: false });
    this.playQuack();
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.playQuack();
  }
  toggleTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    this.todos.sort((a, b) => Number(a.completed) - Number(b.completed));
    this.playQuack();
  }
}

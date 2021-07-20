import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // Attr
  messages: string[] = [];

  constructor() {}

  // Methods
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

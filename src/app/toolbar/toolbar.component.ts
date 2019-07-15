import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IApplicationCommand } from '../ApplicationCommands/IApplicationCommand';
import { CreateTaskCommand } from '../ApplicationCommands/CreateTaskCommand';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() addElement: EventEmitter<IApplicationCommand> =
    new EventEmitter<IApplicationCommand>();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.addElement.emit(
      new CreateTaskCommand(
        'task_2' + Math.random(),
        200 + Math.random() * 100,
        300 + Math.random() * 100
      )
    );
  }
}

import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { IFlowElement } from './shared/models/flow-element.model';
import { IApplicationCommand } from '../ApplicationCommands/IApplicationCommand';
import { CreateTaskCommand } from '../ApplicationCommands/CreateTaskCommand';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],

  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent {

  @Input()
  state: IFlowElement[];

  @Output()
  eventBus: EventEmitter<IApplicationCommand> = new EventEmitter<IApplicationCommand>();

  constructor() { }

  onAdd() {
    this.eventBus.emit(
      new CreateTaskCommand(
        'task_2' + Math.random(),
        200 + Math.random() * 100,
        300 + Math.random() * 100
      )
    );
  }
}

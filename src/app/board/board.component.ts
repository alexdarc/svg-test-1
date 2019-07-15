import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { IFlowElement } from './shared/models/flow-element.model';
import { IApplicationCommand } from '../ApplicationCommands/IApplicationCommand';
import { CreateTaskCommand } from '../ApplicationCommands/CreateTaskCommand';
import { CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],

  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BoardComponent {

  @Input()
  state: IFlowElement[];

  @Output()
  eventBus: EventEmitter<IApplicationCommand> = new EventEmitter<IApplicationCommand>();

  constructor() { }

  onAdd(evt: MouseEvent) {
    this.eventBus.emit(
      new CreateTaskCommand(
        'task_2' + Math.random(),
        evt.offsetX,
        evt.offsetY
      )
    );
  }

  log(data) {
    console.log(data);
  }
}

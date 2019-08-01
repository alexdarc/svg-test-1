import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { IFlowElement } from './shared/models/flow-element.model';
import { IApplicationCommand } from '../ApplicationCommands/IApplicationCommand';
import { CreateTaskCommand } from '../ApplicationCommands/CreateTaskCommand';
import { MoveCommand } from '../ApplicationCommands/MoveCommand';
import { Point } from '@angular/cdk/drag-drop/typings/drag-ref';
import { FlowNode } from './shared/models/flow-node.model';
import { SequenceFlow } from './elements/sequence-flow/sequence-flow.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],

  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BoardComponent {

  @Input()
  set state(value: IFlowElement[]) {
    this.flowNodes = value.filter(e => e instanceof FlowNode)
      .map(e => e as FlowNode);

    this.sequenceFlows = value.filter(e => e instanceof SequenceFlow)
      .map(e => e as SequenceFlow);
  }

  flowNodes: FlowNode[];
  sequenceFlows: SequenceFlow[];

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

  onRelease(options: { flowElementId: string, coords: Point }) {
    this.eventBus.emit(
      new MoveCommand(
        options.flowElementId,
        options.coords
      )
    );
  }

  flowNodeDropPredicate(data: any): boolean {
    return data != null;
  }
}

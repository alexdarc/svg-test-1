import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { IDatabase } from './../shared/models/database.model';
import { IFlowElement } from './../shared/models/flow-element.model';
import { ProcessElement } from './../shared/models/process-element.model';

import { StartComponent } from './start/start.component';
import { IStartEvent } from './../shared/models/start-event.model';
import { GatewayComponent } from './gateway/gateway.component';
import { IGateway } from '../shared/models/gateway.model';
import { TaskComponent } from './task/task.component';
import { ITask } from './../shared/models/task.model';
import { EndComponent } from './end/end.component';
import { IEndEvent } from '../shared/models/end-event.model';
import { SequenceFlowComponent } from './sequence-flow/sequence-flow.component';
import { ISequenceFlow } from '../shared/models/sequence-flow.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],

  entryComponents: [StartComponent, GatewayComponent, TaskComponent, EndComponent, SequenceFlowComponent],
  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent implements OnInit {
  @Input() db: IDatabase;

  processElements: ProcessElement[] = [];

  // XXX: Как тут поступать, если не найден тип ($type)
  readonly typesToElements: {[s: string]: (data: IFlowElement) => ProcessElement} = {
    tStartEvent: (context: IStartEvent) => new ProcessElement(StartComponent, context),
    tExclusiveGateway: (context: IGateway) => new ProcessElement(GatewayComponent, context),
    tTask: (context: ITask) => new ProcessElement(TaskComponent, context),
    tEndEvent: (context: IEndEvent) => new ProcessElement(EndComponent, context),
    tSequenceFlow: (context: ISequenceFlow) => new ProcessElement(SequenceFlowComponent, context),
  };

  constructor() { }

  ngOnInit() {
    this.db.getEvents()
      .subscribe((flowElements: IFlowElement[]) => {
        this.processElements = flowElements.map((element) => {
          return this.typesToElements[element.$type](element);
        });
      });
  }

}

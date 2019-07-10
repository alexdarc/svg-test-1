import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IDatabase } from '../../board/shared/models/database.model';
import { IFlowElement } from '../../board/shared/models/flow-element.model';
import { StartEvent } from './../../board/elements/start/start-event.model';
import { EndEvent } from 'src/app/board/elements/end/end-event.model';
import { Task } from 'src/app/board/elements/task/task.model';
import { Gateway } from './../../board/elements/gateway/gateway.model';
import { SequenceFlow } from './../../board/elements/sequence-flow/sequence-flow.model';

@Injectable({
  providedIn: 'root'
})
export class MockService implements IDatabase {

  constructor() { }

  getEvents(): Observable<IFlowElement[]> {
    console.log('test');

    return of([
      new SequenceFlow(
        'SequenceFlow_1b0wrod',
        'StartEvent_1',
        'Task_1o7dp70',
        [
          { x: 283.0, y: 295.0 },
          { x: 333.0, y: 295.0 },
        ],
      ),
      new StartEvent(
        'StartEvent_1',
        null,
        ['SequenceFlow_1b0wrod'],
        247.0,
        277.0,
        36.0,
        36.0,
      ),
      new Gateway(
        'ExclusiveGateway_1fm7m1m',
        ['SequenceFlow_0m76es2'],
        ['SequenceFlow_0enu52f', 'SequenceFlow_0ptyi06'],
        483.0,
        270.0,
        50.0,
        50.0,
      ),
      new Task(
        'Task_1o7dp70',
        ['SequenceFlow_1b0wrod'],
        ['SequenceFlow_0m76es2'],
        333.0,
        255.0,
        100.0,
        80.0,
      ),
      new EndEvent(
        'EndEvent_1c03rye',
        ['SequenceFlow_0ptyi06'],
        null,
        583.0,
        387.0,
        36.0,
        36.0
      ),
      new SequenceFlow(
        'SequenceFlow_0ptyi06',
        'ExclusiveGateway_1fm7m1m',
        'EndEvent_1c03rye',
        [
          { x: 508.0, y: 320.0 },
          { x: 508.0, y: 405.0 },
          { x: 583.0, y: 405.0 },
        ],
      ),
    ]);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IDatabase } from './../models/database.model';
import { IFlowElement } from '../models/flow-element.model';

@Injectable({
  providedIn: 'root'
})
export class MockService implements IDatabase {

  constructor() { }

  getEvents(): Observable<IFlowElement[]> {
    console.log('test');

    return of([
      // {
      //   $type: 'tSequenceFlow',
      //   id: 'SequenceFlow_1b0wrod',
      //   sourceRef: 'StartEvent_1',
      //   targetRef: 'Task_1o7dp70',
      //   waypoints: [
      //     { x: 283.0, y: 295.0 },
      //     { x: 333.0, y: 295.0 },
      //   ],
      // },
      {
        $type: 'tStartEvent',
        id: 'StartEvent_1',
        incoming: null,
        outgoing: ['SequenceFlow_1b0wrod'],
        x: 247.0,
        y: 277.0,
        width: 36.0,
        height: 36.0,
      },
      {
        $type: 'tExclusiveGateway',
        id: 'ExclusiveGateway_1fm7m1m',
        incoming: ['SequenceFlow_0m76es2'],
        outgoing: ['SequenceFlow_0enu52f', 'SequenceFlow_0ptyi06'],
        x: 483.0,
        y: 270.0,
        width: 50.0,
        height: 50.0,
      },
      {
        $type: 'tTask',
        id: 'Task_1o7dp70',
        incoming: ['SequenceFlow_1b0wrod'],
        outgoing: ['SequenceFlow_0m76es2'],
        x: 333.0,
        y: 255.0,
        width: 100.0,
        height: 80.0,
      },
      {
        $type: 'tEndEvent',
        id: 'EndEvent_1c03rye',
        incoming: ['SequenceFlow_0ptyi06'],
        outgoing: null,
        x: 583.0,
        y: 387.0,
        width: 36.0,
        height: 36.0
      },
      {
        $type: 'tSequenceFlow',
        id: 'SequenceFlow_0ptyi06',
        sourceRef: 'ExclusiveGateway_1fm7m1m',
        targetRef: 'EndEvent_1c03rye',
        waypoints: [
          { x: 508.0, y: 320.0 },
          { x: 508.0, y: 405.0 },
          { x: 583.0, y: 405.0 },
        ],
      },
    ]);
  }
}

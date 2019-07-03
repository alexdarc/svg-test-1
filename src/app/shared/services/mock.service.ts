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
        height: 36.0
      },
    ]);
  }
}

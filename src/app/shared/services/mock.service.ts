import { Injectable } from '@angular/core';

import { IDatabase } from './../models/database.model';
import { Observable, of } from 'rxjs';
import { IFlowElement } from '../models/flow-element.model';

@Injectable({
  providedIn: 'root'
})
export class MockService implements IDatabase {

  constructor() { }

  getEvents(): Observable<IFlowElement[]> {
    return of([
      {
        $type: 'tSequenceFlow',
        id: 'SequenceFlow_1b0wrod',
        sourceRef: 'StartEvent_1',
        targetRef: 'Task_1o7dp70',
        waypoints: [
          { x: 283.0, y: 295.0 },
          { x: 333.0, y: 295.0 },
        ],
      }
    ]);
  }
}

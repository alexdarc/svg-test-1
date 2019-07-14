import { Task } from './elements/task/task.model';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { IDatabase } from './shared/models/database.model';
import { IFlowElement } from './shared/models/flow-element.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],

  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent implements OnInit {
  @Input() db: IDatabase;

  flowElements: IFlowElement[] = [];

  constructor() { }

  ngOnInit() {
    this.db.getEvents()
      .subscribe((flowElements: IFlowElement[]) => {
        this.flowElements = flowElements;
      });
  }

  onAdd() {
    this.flowElements.push(
      new Task({
        id: 'task_2',
        incoming: null,
        outgoing: null,
        x: 100,
        y: 200,
        width: 100,
        height: 70,
      })
    );
  }
}

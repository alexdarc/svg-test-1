import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { IDatabase } from './../shared/models/database.model';
import { IFlowElement } from './../shared/models/flow-element.model';
import { ProcessElement } from './../shared/models/process-element.model';

import { StartComponent } from './start/start.component';
import { IStartEvent } from './../shared/models/start-event.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],

  entryComponents: [StartComponent],
  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent implements OnInit {
  @Input() db: IDatabase;

  processElements: ProcessElement[] = [];

  readonly typesToElements: {[s: string]: (data: IFlowElement) => ProcessElement} = {
    tStartEvent: (context: IStartEvent) => new ProcessElement(StartComponent, context),
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

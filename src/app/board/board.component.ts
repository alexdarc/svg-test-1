import { Component, OnInit, Input } from '@angular/core';

import { IDatabase } from './../shared/models/database.model';
import { IFlowElement } from './../shared/models/flow-element.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() db: IDatabase;

  flowElements: IFlowElement[] = [];

  constructor() { }

  ngOnInit() {
    this.db.getEvents()
      .subscribe((flowElements) => {
        this.flowElements = flowElements;
      });
  }

}

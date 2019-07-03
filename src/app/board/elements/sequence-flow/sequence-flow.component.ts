import { Component, OnInit } from '@angular/core';

import { IProcessComponent } from '../../shared/models/process-component.model';
import { ISequenceFlow } from '../../shared/models/sequence-flow.model';

@Component({
  selector: 'svg:svg[app-sequence-flow]',
  template: `
    <svg>
      <defs>
        <marker
          id="flow-end"
          viewBox="0 0 20 20"
          refX="11"
          refY="10"
          markerWidth="10"
          markerHeight="10"
          orient="auto"
        >
          <path class="marker" d="M 1 5 L 11 10 L 1 15 Z"></path>
        </marker>
      </defs>
      <path class="line" attr.d="m {{ coords }} "></path>
    </svg>
  `,
  styles: [`
    .line {
      fill: none;
      stroke-width: 2px;
      stroke: black;
      stroke-linejoin: round;
      marker-end: url('#flow-end');
    }

    .marker {
      fill: black;
      stroke-width: 1px;
      stroke-linecap: round;
      stroke-dasharray: 10000, 1;
      stroke: black;
    }
  `],
})
export class SequenceFlowComponent implements IProcessComponent, OnInit {
  context: ISequenceFlow;

  coords: string;

  constructor() { }

  ngOnInit() {
    this.coords = this.context.waypoints
      .map((coords) => `${coords.x},${coords.y}`)
      .join('L');
  }

}

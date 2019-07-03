import { Component, OnInit } from '@angular/core';

import { IProcessComponent } from 'src/app/board/shared/models/process-component.model';
import { ITask } from 'src/app/board/shared/models/task.model';

@Component({
  selector: 'svg:svg[app-task]',
  template: `
    <svg [attr.x]="context.x" [attr.y]="context.y">
      <rect x="0" y="0" [attr.width]="context.width" [attr.height]="context.height" rx="10" ry="10"></rect>
    </svg>
  `,
  styles: [`
    rect {
      stroke: black;
      stroke-width: 2px;
      fill: white;
      fill-opacity: 0.95;
    }
  `],
})
export class TaskComponent implements IProcessComponent, OnInit {
  context: ITask;

  constructor() { }

  ngOnInit() {
  }

}

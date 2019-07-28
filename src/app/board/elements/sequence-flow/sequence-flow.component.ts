import { Component, Input } from '@angular/core';

import { IProcessComponent } from '../../shared/models/process-component.model';
import { SequenceFlow } from './sequence-flow.model';

@Component({
  selector: 'svg:svg[app-sequence-flow]',
  templateUrl:'./sequence-flow.component.html',
  styleUrls: ['./sequence-flow.component.css'],
})
export class SequenceFlowComponent implements IProcessComponent {
  @Input()
  context: SequenceFlow;
}

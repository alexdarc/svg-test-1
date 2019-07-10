import { IProcessComponent } from './process-component.model';
import { IFlowElement } from './flow-element.model';

export class ProcessElement {
  constructor(
    public component: { new(): IProcessComponent },
    public context: IFlowElement,
  ) {}
}

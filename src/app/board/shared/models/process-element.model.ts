import { IProcessComponent } from './process-component.model';
import { IFlowElement } from './flow-element.model';

// export interface IProcessElement {
//   component: { new(): IProcessComponent };
//   context: IFlowElement;
// }

export class ProcessElement {
  constructor(
    public component: { new(): IProcessComponent },
    public context: IFlowElement,
  ) {}
}

import { IFlowElement } from './flow-element.model';

export class FlowNode implements IFlowElement {
  constructor(
    public id: string,
    public incoming: string[],
    public outgoing: string[],
    public x: number,
    public y: number,
    public width: number,
    public height: number,
  ) {}
}

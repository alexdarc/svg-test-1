import { IFlowElement } from './flow-element.model';

export interface IFlowNode extends IFlowElement {
  incoming: string[];
  outgoing: string[];
  x: number;
  y: number;
  width: number;
  height: number;
}

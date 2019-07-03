import { IFlowElement } from './flow-element.model';
import { ICoords } from './coords.model';

export interface ISequenceFlow extends IFlowElement {
  sourceRef: string;
  targetRef: string;
  waypoints: ICoords[];
}

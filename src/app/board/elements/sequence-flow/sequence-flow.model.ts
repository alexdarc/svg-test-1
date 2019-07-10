import { IFlowElement } from '../../shared/models/flow-element.model';
import { ICoords } from '../../shared/models/coords.model';

export class SequenceFlow implements IFlowElement {
  constructor(
    public id: string,
    public sourceRef: string,
    public targetRef: string,
    public waypoints: ICoords[],
  ) {}
}

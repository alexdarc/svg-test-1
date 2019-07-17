import { ICoords } from './coords.model';

export interface IFlowElement {
  id: string;

  changePosition(coords: ICoords): void;
}

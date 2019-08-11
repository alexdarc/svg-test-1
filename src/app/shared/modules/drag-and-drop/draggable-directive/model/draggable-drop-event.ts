import { DraggablePosition } from './draggable-position';

export class DraggableDropEvent {
  public readonly startingPosition: DraggablePosition;
  public readonly acceptedDrop: boolean;
  public readonly data: any;

  constructor(option: {
    startingPosition: DraggablePosition,
    acceptedDrop: boolean,
    data: any
  }) {
    this.startingPosition = option.startingPosition;
    this.acceptedDrop = option.acceptedDrop;
    this.data = option.data;
  }
}

import { DraggablePosition } from './draggable-position';

export class DraggableDropEvent {
  startingPosition: DraggablePosition;
  acceptedDrop: boolean;

  constructor(option: {
    startingPosition: DraggablePosition,
    acceptedDrop: boolean
  }) {
    this.startingPosition = option.startingPosition;
    this.acceptedDrop = option.acceptedDrop;
  }
}

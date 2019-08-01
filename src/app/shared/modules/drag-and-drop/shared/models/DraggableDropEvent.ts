import { Position } from './Position';

export class DraggableDropEvent {
  startingPosition: Position;
  acceptedDrop: boolean;

  constructor(option: {
    startingPosition: Position,
    acceptedDrop: boolean
  }) {
    this.startingPosition = option.startingPosition;
    this.acceptedDrop = option.acceptedDrop;
  }
}

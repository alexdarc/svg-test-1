import { Position } from '../Position';

export class DropEvent {
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
  
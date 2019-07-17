import { ICoords } from './../board/shared/models/coords.model';
import { IApplicationCommand } from './IApplicationCommand';
import { FlowElementEventVisitor } from './ApplicationCommandVisitors/FlowElementEventVisitor';

export class MoveCommand
  implements IApplicationCommand {
  constructor(
    public id: string,
    public coords: ICoords) {
  }

  public Visit(
    flowElementEventVisitor: FlowElementEventVisitor): void {
    flowElementEventVisitor.VisitMove(this);
  }
}

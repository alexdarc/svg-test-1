import { IApplicationCommand } from './IApplicationCommand';
import { FlowElementEventVisitor } from './ApplicationCommandVisitors/FlowElementEventVisitor';

export class CreateStartEventCommand
  implements IApplicationCommand {
  constructor(
    public id: string,
    public x: number,
    public y: number) {
  }

  public Visit(
    flowElementEventVisitor: FlowElementEventVisitor): void {
    flowElementEventVisitor.VisitStartEvent(this);
  }
}

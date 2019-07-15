import { IApplicationCommand } from './IApplicationCommand';
import { FlowElementEventVisitor } from './ApplicationCommandVisitors/FlowElementEventVisitor';

export class CreateTaskCommand
  implements IApplicationCommand {
  constructor(
    public id: string,
    public x: number,
    public y: number) {
  }

  public Visit(
    flowElementEventVisitor: FlowElementEventVisitor): void {
    flowElementEventVisitor.Visit(this);
  }
}

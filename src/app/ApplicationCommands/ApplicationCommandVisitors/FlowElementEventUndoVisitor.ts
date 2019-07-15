import { FlowElementEventVisitor } from './FlowElementEventVisitor';
import { IFlowElementsStorage } from 'src/app/FlowElementEventsStorage/IFlowElementsStorage';
import { CreateTaskCommand } from '../CreateTaskCommand';

export class FlowElementEventUndoVisitor
  extends FlowElementEventVisitor {

  constructor(
    private flowElementsStorage: IFlowElementsStorage
  ) {
    super();
  }

  public Visit(createTaskCommand: CreateTaskCommand): void {
    this.flowElementsStorage.Remove({
      id: createTaskCommand.id
    });
  }
}

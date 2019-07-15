import { FlowElementEventVisitor } from './FlowElementEventVisitor';
import { IFlowElementsStorage } from '../../FlowElementEventsStorage/IFlowElementsStorage';
import { CreateTaskCommand } from '../CreateTaskCommand';
import { Task } from '../../board/elements/task/task.model';

export class FlowElementEventApplyingVisitor
  extends FlowElementEventVisitor {

  constructor(
    private flowElementsStorage: IFlowElementsStorage
  ) {
    super();
  }

  public Visit(createTaskCommand: CreateTaskCommand): void {
    this.flowElementsStorage.Push(
      new Task({
        id: createTaskCommand.id,
        incoming: null,
        outgoing: null,
        x: createTaskCommand.x,
        y: createTaskCommand.y,
        width: 100,
        height: 70,
      })
    );
  }
}

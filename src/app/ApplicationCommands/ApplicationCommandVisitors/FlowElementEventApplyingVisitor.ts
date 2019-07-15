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

  public Visit(createTaskEvet: CreateTaskCommand): void {
    this.flowElementsStorage.Push(
      new Task({
        id: createTaskEvet.id,
        incoming: null,
        outgoing: null,
        x: createTaskEvet.x,
        y: createTaskEvet.y,
        width: 100,
        height: 70,
      })
    );
  }
}

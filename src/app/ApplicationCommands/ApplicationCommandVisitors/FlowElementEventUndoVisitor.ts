import { FlowElementEventVisitor } from './FlowElementEventVisitor';
import { IFlowElementsStorage } from 'src/app/FlowElementEventsStorage/IFlowElementsStorage';
import { CreateTaskCommand } from '../CreateTaskCommand';
import { CreateStartEventCommand } from '../CreateStartEventCommand';
import { CreateEndEventCommand } from '../CreateEndEventCommand';
import { CreateGatewayCommand } from '../CreateGatewayCommand';

export class FlowElementEventUndoVisitor
  extends FlowElementEventVisitor {

  constructor(
    private flowElementsStorage: IFlowElementsStorage
  ) {
    super();
  }

  public VisitTask(createTaskCommand: CreateTaskCommand): void {
    this.flowElementsStorage.Remove({
      id: createTaskCommand.id
    });
  }

  public VisitStartEvent(createStartEventCommand: CreateStartEventCommand): void {
    this.flowElementsStorage.Remove({
      id: createStartEventCommand.id
    });
  }

  public VisitEndEvent(createEndEventCommand: CreateEndEventCommand): void {
    this.flowElementsStorage.Remove({
      id: createEndEventCommand.id
    });
  }

  public VisitGateway(createGatewayCommand: CreateGatewayCommand): void {
    this.flowElementsStorage.Remove({
      id: createGatewayCommand.id
    });
  }
}

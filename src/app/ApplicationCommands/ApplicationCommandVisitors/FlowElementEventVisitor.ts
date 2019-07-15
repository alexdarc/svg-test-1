import { CreateTaskCommand } from '../CreateTaskCommand';

export abstract class FlowElementEventVisitor {
  public abstract Visit(createTaskCommand: CreateTaskCommand): void;
}

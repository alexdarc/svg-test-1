import { FlowElementEventVisitor } from './ApplicationCommandVisitors/FlowElementEventVisitor';

export interface IApplicationCommand {
  Visit(
    flowElementEventVisitor: FlowElementEventVisitor): void;
}

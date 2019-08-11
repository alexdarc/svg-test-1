import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FlowNode} from "../../shared/models/flow-node.model";
import {Point} from "@angular/cdk/drag-drop/typings/drag-ref";
import {MoveCommand} from "../../../ApplicationCommands/MoveCommand";
import {IApplicationCommand} from "../../../ApplicationCommands/IApplicationCommand";
import {DropContainerOverEvent} from "../../../shared/modules/drag-and-drop/drop-container-directive/model/drop-container-over-event";
import {DependencyContainer} from "../../../DependencyContainer";

@Component({
  selector: "svg:svg[app-flow-node]",
  templateUrl: "./flow-node.component.html",
  styleUrls: ['./flow-node.component.css'],
})
export class FlowNodeComponent {
  @Input("flowNodeContext")
  public context: FlowNode;
  isOk: boolean = null;
  private dependencyContainer: DependencyContainer;

  constructor(dependencyContainer: DependencyContainer){
    this.dependencyContainer = dependencyContainer;
  }

  @Output()
  eventBus: EventEmitter<IApplicationCommand> = new EventEmitter<IApplicationCommand>();

  onRelease(options: { flowElementId: string, coords: Point }) {
    this.eventBus.emit(
      new MoveCommand(
        options.flowElementId,
        options.coords
      )
    );
  }

  flowNodeDropPredicate = (data: any): boolean => {
    return this.dependencyContainer
      .canLinkOutgoingSequenceFlowToFlowObjectQueryHandler
      .Handle({
        flowObjectId: this.context.id
      });
  };

  out()
  {
    this.isOk = null;
  }

  over(event: DropContainerOverEvent) {
    this.isOk = event.accepted;
  }
}

import { ICoords } from '../board/shared/models/coords.model';
import { IFlowElementsStorage } from '../FlowElementEventsStorage/IFlowElementsStorage';
import { FlowNode } from '../board/shared/models/flow-node.model';
import { SequenceFlow } from '../board/elements/sequence-flow/sequence-flow.model';
import { UpdateInstruction } from './UpdateInstruction';

export class MoveFlowNodeCommandHandler {
  constructor(
        private flowElementsStorage: IFlowElementsStorage) {
  }

  public Handle(option: { flowNodeId: string, offset: ICoords }) {
    const flowNode: FlowNode = this.flowElementsStorage
            .GetById({ id: option.flowNodeId }) as FlowNode;

    this.flowElementsStorage.Update(
      {
        id: option.flowNodeId,
        update: new UpdateInstruction({
          set: {
            x: flowNode.x + option.offset.x,
            y: flowNode.y + option.offset.y
          }
        })
      }
        );

    const incomingArrows: SequenceFlow[] = (flowNode.incoming || [])
            .map((seqFlowId) => {
              return this.flowElementsStorage
                    .GetById({ id: seqFlowId }) as SequenceFlow;
            });


    incomingArrows.forEach((seqFlow) => {
      this.UpdateWayPoint({
        sequenceFlow: seqFlow,
        index: seqFlow.waypoints.length - 1,
        offset: option.offset
      });
    });

    const outgoingArrows: SequenceFlow[] = (flowNode.outgoing || [])
            .map((seqFlowId) => {
              return this.flowElementsStorage
                    .GetById({ id: seqFlowId }) as SequenceFlow;
            });

    outgoingArrows.forEach((seqFlow) => {
      this.UpdateWayPoint({
        sequenceFlow: seqFlow,
        index: 0,
        offset: option.offset
      });
    });
  }


  private UpdateWayPoint(option: {
    sequenceFlow: SequenceFlow,
    index: number,
    offset: ICoords}) {

    const waypoint = option.sequenceFlow
        .waypoints[option.index];

    waypoint.x = waypoint.x + option.offset.x;
    waypoint.y = waypoint.y + option.offset.y;
    option.sequenceFlow.waypoints[option.index] = waypoint;

    this.flowElementsStorage
            .Update({
              id: option.sequenceFlow.id,
              update: new UpdateInstruction({
                set: {
                  waypoints: option.sequenceFlow
                            .waypoints.map(o => o)
                }
              })
            });
  }
}

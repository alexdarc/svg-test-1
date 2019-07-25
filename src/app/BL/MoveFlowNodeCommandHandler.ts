import { ICoords } from "../board/shared/models/coords.model";
import { IFlowElementsStorage } from '../FlowElementEventsStorage/IFlowElementsStorage';
import { FlowNode } from '../board/shared/models/flow-node.model';
import { SequenceFlow } from '../board/elements/sequence-flow/sequence-flow.model';
import { UpdateInstruction } from './UpdateInstruction';

export class MoveFlowNodeCommandHandler
{
    constructor(
        private flowElementsStorage: IFlowElementsStorage)
    {
    }

    public Handle(option: { flowNodeId: string, coords: ICoords })
    {
        const flowNode: FlowNode = this.flowElementsStorage
            .GetById({ id: option.flowNodeId }) as FlowNode;

        this.flowElementsStorage.Update(
            {
                id: option.flowNodeId,
                update: new UpdateInstruction({
                    set: {
                        x: flowNode.x + option.coords.x,
                        y: flowNode.y + option.coords.y
                    }
                })
            }
        )
    
        const incomingArrows: SequenceFlow[] = (flowNode.incoming || [])
            .map((seqFlowId) => {
                return this.flowElementsStorage
                    .GetById({ id: seqFlowId }) as SequenceFlow;
                });


        incomingArrows.forEach((seqFlow) => {
            this.UpdateWayPoint({
                sequenceFlow: seqFlow,
                index: seqFlow.waypoints.length - 1,
                coords: option.coords
            })
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
                coords: option.coords
            })
        });
    }


    private UpdateWayPoint(option: {
        sequenceFlow: SequenceFlow,
        index: number,
        coords: ICoords})
    {

        let waypoint = option.sequenceFlow
        .waypoints[option.index];

        waypoint.x = waypoint.x + option.coords.x;
        waypoint.y = waypoint.y + option.coords.y;
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
            })
    }
}
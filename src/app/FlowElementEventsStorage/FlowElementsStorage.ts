import { IFlowElementsStorage } from './IFlowElementsStorage';
import { IFlowElement } from '../board/shared/models/flow-element.model';
import { IDatabase } from '../board/shared/models/database.model';
import { ICoords } from '../board/shared/models/coords.model';
import { FlowNode } from './../board/shared/models/flow-node.model';
import { SequenceFlow } from '../board/elements/sequence-flow/sequence-flow.model';

export class FlowElementsStorage
  implements IFlowElementsStorage {

  flowElements: IFlowElement[] = [];

  constructor(private db: IDatabase) {
    this.db
      .getEvents()
      .subscribe((flowElements: IFlowElement[]) => {
        this.flowElements = flowElements;
      });
  }

  public Push(flowElement: IFlowElement): void {
    this.flowElements
      .push(flowElement);
  }

  public Remove(option: { id: string; }): void {
    this.flowElements = this.flowElements
      .filter(
        (el) => el.id !== option.id
      );
  }

  public Get(): IFlowElement[] {
    return this.flowElements;
  }

  public GetById(id: string): IFlowElement {
    return this.flowElements.find(
      (el) => el.id === id
    );
  }

  public MoveTo(id: string, coords: ICoords): void {
  }
}

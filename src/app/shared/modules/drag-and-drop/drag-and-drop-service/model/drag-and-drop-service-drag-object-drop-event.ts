import {DragAndDropServiceDropContainerContext} from "./drag-and-drop-service-drop-container-context";

export class DragAndDropServiceDragObjectDropEvent {
  public readonly containerContext: DragAndDropServiceDropContainerContext;
  public readonly accepted: boolean;

  constructor(option: {
    containerContext: DragAndDropServiceDropContainerContext,
    accepted: boolean
  }) {
    this.containerContext = option.containerContext;
    this.accepted = option.accepted;
  }
}

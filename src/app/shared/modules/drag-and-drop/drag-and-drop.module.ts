import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropService } from './drag-and-drop-service/drag-and-drop.service';
import { DraggableDirective } from './draggable-directive/draggable.directive';
import { DropContainerDirective } from './drop-container-directive/drop-container.directive';

@NgModule({
  declarations: [
    DraggableDirective,
    DropContainerDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DraggableDirective,
    DropContainerDirective,
  ],
  providers: [DragAndDropService],
})
export class DragAndDropModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropService } from './shared/services/drag-and-drop.service';
import { DraggableDirective } from './shared/directives/draggable.directive';
import { DropContainerDirective } from './shared/directives/drop-container.directive';

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

import { Component, HostListener } from '@angular/core';

import { MockService } from './shared/services/mock.service';
import { GistService } from './shared/services/gist.service';

import { UndoRedoStateManager } from './UndoRedoStateManager/UndoRedoStateManager';
import { IApplicationCommand } from './ApplicationCommands/IApplicationCommand';
import { FlowElementEventVisitor } from './ApplicationCommands/ApplicationCommandVisitors/FlowElementEventVisitor';
import { FlowElementsStorage } from './FlowElementEventsStorage/FlowElementsStorage';
import { FlowElementEventApplyingVisitor } from './ApplicationCommands/ApplicationCommandVisitors/FlowElementEventApplyingVisitor';
import { FlowElementEventUndoVisitor } from './ApplicationCommands/ApplicationCommandVisitors/FlowElementEventUndoVisitor';

const KEY_Y = 89;
const KEY_Z = 90;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  undoRedoStateManager: UndoRedoStateManager<IApplicationCommand, FlowElementEventVisitor>;
  flowElementStorage: FlowElementsStorage;

  constructor(
    public mockService: MockService,
    public gistService: GistService,
  ) {
    this.flowElementStorage = new FlowElementsStorage(gistService);

    this.undoRedoStateManager
      = new UndoRedoStateManager<IApplicationCommand, FlowElementEventVisitor>(
        new FlowElementEventApplyingVisitor(this.flowElementStorage),
        new FlowElementEventUndoVisitor(this.flowElementStorage)
      );
  }

  OnBoardEvent(command: IApplicationCommand) {
    this.undoRedoStateManager
      .Apply(command);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    if (($event.ctrlKey || $event.metaKey) && $event.keyCode === KEY_Y) {
      this.undoRedoStateManager
        .Redo();
    }

    // tslint:disable-next-line: deprecation
    if (($event.ctrlKey || $event.metaKey) && $event.keyCode === KEY_Z) {
      this.undoRedoStateManager
        .Undo();
    }
  }
}

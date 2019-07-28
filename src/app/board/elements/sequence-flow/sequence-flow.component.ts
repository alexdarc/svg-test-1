import { Component, OnInit, Input, Renderer2 } from '@angular/core';

import { IProcessComponent } from '../../shared/models/process-component.model';
import { SequenceFlow } from './sequence-flow.model';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { CdkDragMove, CdkDragEnter, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'svg:svg[app-sequence-flow]',
  templateUrl:'./sequence-flow.component.html',
  styleUrls: ['./sequence-flow.component.css'],
})
export class SequenceFlowComponent implements IProcessComponent {
  @Input()
  context: SequenceFlow;

  constructor(
    private renderer: Renderer2,
  )
  {
    
  }

  dragEntered(event: CdkDragEnter)
  {
    console.log(event);
  }

  mousedown(event:any)
  {
    console.log(event);
    this.renderer.setStyle(
      event.source.element.nativeElement,
      'pointer-events',
      'none'
    );
  }

  waypointMove(event: CdkDragMove, index: number)
  {
    this.context.waypoints[index].x = event.event["offsetX"];
    this.context.waypoints[index].y = event.event["offsetY"];

    /*
      NOTE: Библиотека drag-n-drop работает как-то не так
      reset очищает стили transform, но не удаляет аттрибут transform.
      Возможно это из-за того что svg, но почему тогда этот аттрибут добавляется?
    */
    this.renderer.removeAttribute(
      event.source.element.nativeElement,
      'transform',
    );

    this.renderer.removeStyle(
      event.source.element.nativeElement,
      'transform',
    );
  }
}

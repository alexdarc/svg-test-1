import {
    Directive,
    ElementRef,
    Renderer2,
    Output,
    EventEmitter,
    HostListener,
  } from '@angular/core';

export class MoveEvent {
  public offsetY: number;
  public offsetX: number;

  constructor(option: {
    offsetX: number,
    offsetY: number,
  }) {
    this.offsetX = option.offsetX;
    this.offsetY = option.offsetY;
  }
}

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2
  ) {
  }

  private selected: boolean;
  private startPosition: {
    x: number;
    y: number;
  };


  @Output()
  onmove: EventEmitter<MoveEvent> = new EventEmitter<MoveEvent>();

  @HostListener('document:mousemove', ['$event'])
  mousemove(event: MouseEvent) {
    if (this.selected) {
      this.onmove
        .emit(new MoveEvent({
          offsetX: event.offsetX,
          offsetY: event.offsetY
        }));
    }
  }

  @HostListener('document:mouseup', ['$event'])
  mouseup(event: MouseEvent) {
    if (this.selected) {
      this.selected = false;
      this.renderer
        .removeStyle(
          this.elementRef.nativeElement,
          'pointer-events');
    }
  }

  @HostListener('mousedown', ['$event'])
  mousedown(event: MouseEvent) {
    this.selected = true;
    this.renderer
      .setStyle(
        this.elementRef.nativeElement,
        'pointer-events',
        'none');
  }
}

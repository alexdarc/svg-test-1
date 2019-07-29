import {
  Directive,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDropContainer]'
})
export class DropContainerDirective {
  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2
  ) {
  }

  isMouseOver: boolean;

  @HostListener('mouseover', ['$event'])
  mouseover() {
    this.isMouseOver = true;
    console.log("Over");
  }

  @HostListener('mouseout', ['$event'])
  mouseout() {
    this.isMouseOver = false;
    console.log("Out");
  }
}

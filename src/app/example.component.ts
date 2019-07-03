import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg:svg[app-example]',
  template: `
    <svg>
      <svg:circle [attr.cx]="radius" [attr.cy]="radius" [attr.r]="radius"></svg:circle>
    </svg>
  `,
  styles: [`
    circle {
      stroke: black;
      stroke-width: 2px;
      fill: white;
      fill-opacity: 0.95;
    }
  `],
})
export class ExampleComponent implements OnInit {
  @Input() context: { width: number, height: number };

  radius: number;

  constructor() { }

  ngOnInit() {
    this.radius = Math.round((this.context.width + this.context.height) / 4);
  }

}

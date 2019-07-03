import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  SimpleChanges,
  ComponentFactory,
} from '@angular/core';

import { ProcessElement } from './../../shared/models/process-element.model';
import { IProcessComponent } from './../../shared/models/process-component.model';

@Component({
  selector: 'svg:svg[app-event-element]',
  template: `<ng-template #dynamicContainer></ng-template>`,
})
export class EventElementComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer: ViewContainerRef;

  @Input() processElement: ProcessElement;

  private componentRef: ComponentRef<IProcessComponent>;
  private componentInstance: IProcessComponent;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['componentData']) {
      this.createComponent();
    }
  }

  ngOnDestroy() {
    if (this.componentInstance) {
      this.componentInstance = null;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private createComponent() {
    this.dynamicContainer.clear();
    if (this.processElement) {
      const factory: ComponentFactory<IProcessComponent> = this.resolver.resolveComponentFactory(this.processElement.component);
      this.componentRef = this.dynamicContainer.createComponent(factory);
      this.componentInstance = this.componentRef.instance;

      // Передаем данные в компонент
      this.componentInstance.context = this.processElement.context;
    }
  }
}

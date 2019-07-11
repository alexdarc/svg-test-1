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

import { StartComponent } from '../elements/start/start.component';
import { EndComponent } from './../elements/end/end.component';
import { GatewayComponent } from './../elements/gateway/gateway.component';
import { TaskComponent } from '../elements/task/task.component';
import { SequenceFlowComponent } from '../elements/sequence-flow/sequence-flow.component';

import { IProcessComponent } from '../shared/models/process-component.model';
import { IFlowElement } from './../shared/models/flow-element.model';
import { ProcessElement } from './../shared/models/process-element.model';
import { StartEvent } from '../elements/start/start-event.model';
import { EndEvent } from '../elements/end/end-event.model';
import { Gateway } from './../elements/gateway/gateway.model';
import { Task } from '../elements/task/task.model';
import { SequenceFlow } from '../elements/sequence-flow/sequence-flow.model';

@Component({
  selector: 'svg:svg[app-event-element]',
  template: `<ng-template #dynamicContainer></ng-template>`,

  entryComponents: [StartComponent, GatewayComponent, TaskComponent, EndComponent, SequenceFlowComponent],
})
export class EventElementComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer: ViewContainerRef;

  @Input() flowElement: IFlowElement;

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

    const processElement = this.getProcessElement(this.flowElement);
    if (processElement) {
      const factory: ComponentFactory<IProcessComponent> = this.resolver.resolveComponentFactory(processElement.component);
      this.componentRef = this.dynamicContainer.createComponent(factory);
      this.componentInstance = this.componentRef.instance;

      // Передаем данные в компонент
      this.componentInstance.context = processElement.context;
    }
  }

  private getProcessElement(flowElement): ProcessElement | never {
    let component: { new(): IProcessComponent } = null;

    if (flowElement instanceof StartEvent) {
      component = StartComponent;
    }

    if (flowElement instanceof EndEvent) {
      component = EndComponent;
    }

    if (flowElement instanceof Task) {
      component = TaskComponent;
    }

    if (flowElement instanceof Gateway) {
      component = GatewayComponent;
    }

    if (flowElement instanceof SequenceFlow) {
      component = SequenceFlowComponent;
    }

    if (component) {
      return new ProcessElement(component, flowElement);
    }

    throw new Error('Flow element cannot defined');
  }
}

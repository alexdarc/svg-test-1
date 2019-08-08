// This is not complete model of BPMN events. For additional details check: https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Comparison_of_BPMN_versions
// @ts-ignore
// todo: choose better name
class BPMNEvent extends FlowObject {
  public readonly EventType: EventType;

  constructor(option: {
    id: string,
    incomingIds: string[],
    outgoingIds: string[],
    eventType: EventType}) {

    super({id: option.id, incomingIds: option.incomingIds, outgoingIds: option.outgoingIds});
    this.EventType = option.eventType;
  }
}

class NoneEvent extends BPMNEvent {
}

// @ts-ignore
class MessageEvent extends BPMNEvent {
}

class TimerEvent extends BPMNEvent {
}

// @ts-ignore
class ErrorEvent extends BPMNEvent {
}

class EscalationEvent extends BPMNEvent {
}

class CancelEvent extends BPMNEvent {
}

class CompensationEvent extends BPMNEvent {
}

class ConditionalEvent extends BPMNEvent {
}

class LinkEvent extends BPMNEvent {
}

class SignalEvent extends BPMNEvent {
}

class TerminateEvent extends BPMNEvent {
}

class MultipleEvent extends BPMNEvent {
}

class ParallelMultipleEvent extends BPMNEvent {
}


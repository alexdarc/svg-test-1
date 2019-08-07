// This is not complete model of BPMN events. For additional details check: https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Comparison_of_BPMN_versions
// @ts-ignore
class Event extends FlowObject {
}

class NoneEvent extends Event implements IStartEvent, IIntermediateEvent, IEndEvent {
}

// @ts-ignore
class MessageEvent extends Event implements IStartEvent, IIntermediateEvent, IEndEvent {
}

class TimerEvent extends Event implements IStartEvent, IIntermediateEvent {
}

class ConditionalEvent extends Event implements IStartEvent, IIntermediateEvent {
}

class SignalEvent extends Event implements IStartEvent, IIntermediateEvent, IEndEvent {
}

// @ts-ignore
class ErrorEvent extends Event implements IStartEvent, IIntermediateEvent, IEndEvent {
}

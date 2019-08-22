describe('SequenceFlowConnectionRules (spec 7.6.1)', () => {

  it('IntermediateEvent has incoming SequenceFlow', () => {
    let intermediateEvent = CreateEvent(EventType.Intermediate);
    let result = SequenceFlowConnectionRules.CanLinkIncomingSequenceFlow(
      {flowObject: intermediateEvent})
    expect(result).toEqual(true);
  });
  it('IntermediateEvent has outgoing SequenceFlow', () => {
    let intermediateEvent = CreateEvent(EventType.Intermediate);
    let result = SequenceFlowConnectionRules.CanLinkIncomingSequenceFlow(
      {flowObject: intermediateEvent})
    expect(result).toEqual(true);
  });

  it('StartEvent has no incoming SequenceFlows', () => { throw new Error('not implemented'); });
  it('StartEvent has outgoing SequenceFlow', () => { throw new Error('not implemented'); });

  it('EndEvent has incoming SequenceFlow', () => { throw new Error('not implemented'); });
  it('EndEvent has no outgoing SequenceFlows', () => { throw new Error('not implemented'); });

  it('Activity has incoming SequenceFlow', () => { throw new Error('not implemented'); });
  it('Activity has outgoing SequenceFlow', () => { throw new Error('not implemented'); });

  it('Gateway has incoming SequenceFlow', () => { throw new Error('not implemented'); });
  it('Gateway has outgoing SequenceFlow', () => { throw new Error('not implemented'); });

  it('SubProcess can not be connected to FlowObjects outside of SubProcess', () => { throw new Error('not implemented'); });

  it('SequenceFlow can not cross Pool boundary', () => { throw new Error('not implemented'); });

  function CreateEvent(eventType: EventType) : BPMNEvent {
    return new BPMNEvent({
      id: RandomString(),
      incomingIds: [ RandomString() ],
      outgoingIds: [ RandomString() ],
      eventType: eventType
      }
    );
  }

  function RandomString() : string{
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
});

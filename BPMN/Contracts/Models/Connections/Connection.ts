class Connection {
  public Id: string;
}

class SequenceFlow extends Connection {
  public SourceId: string;
  public TargetId: string;

  constructor(option: {sourceId: string, targetId: string}) {
    super();
    this.SourceId = option.sourceId;
    this.TargetId = option.targetId;
  }
}

class MessageFlow extends Connection {
}

class Association extends Connection {
}

class DataAssociation extends Connection {
}

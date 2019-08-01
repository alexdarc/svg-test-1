export class UpdateInstruction {
  constructor(option: {
    set?: any,
    unset?: any
  }) {
    this.set = option.set;
    this.unset = option.unset;
  }

  public set: any;
  public unset: any;
}

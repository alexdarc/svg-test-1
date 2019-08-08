export class UpdateInstruction
{
    constructor(option: {
        set?: any,
        unset?: any,
        push?: any,
        pop?: any
    }) {
        this.set = option.set;
        this.unset = option.unset;
        this.push = option.push;
        this.pop = option.pop;
    }

    public set: any;
    public unset: any;
    public push: any;
    public pop: any;
}

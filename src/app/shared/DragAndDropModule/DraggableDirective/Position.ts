export class Position {
    offsetX: number;
    offsetY: number;

    constructor(option: {
        offsetX: number,
        offsetY: number
    }) {
        this.offsetX = option.offsetX;
        this.offsetY = option.offsetY;
    }
}
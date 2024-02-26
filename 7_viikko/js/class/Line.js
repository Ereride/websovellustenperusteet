import { Shape } from "./shape.js";

export class Line extends Shape {
    #x2
    #y2

    constructor(x,y, x2, y2){
        super(x,y)
        this.#x2 = x2
        this.#y2 = y2
    }
        
    draw(ctx) {
        ctx.beginPath()
        ctx.moveTo(this._x, this._y)
        ctx.lineTo(this._x + this.#x2, this._y + this.#y2)
        ctx.strokeStyle = this._lineColor
        ctx.stroke()
    }
}
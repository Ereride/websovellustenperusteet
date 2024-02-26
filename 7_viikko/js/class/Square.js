import { Shape } from "./shape.js";

export class Square extends Shape {

    #width

    constructor(x,y, width, length){
        super(x,y)
        this.#width = width
    }
        
    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x,this._y, this.#width, this.#width)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._lineColor
        ctx.stroke()
    }
}
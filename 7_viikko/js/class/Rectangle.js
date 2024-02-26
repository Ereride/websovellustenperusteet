import { Shape } from "./shape.js";

export class Rectangle extends Shape {

    #width
    #length

    constructor(x,y, width, length){
        super(x,y)
        this.#width = width
        this.#length = length
    }
        
    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x,this._y, this.#width, this.#length)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._lineColor
        ctx.stroke()
    }
}
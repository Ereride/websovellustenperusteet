export class Shape {
    _x
    _y
    _lineWidth
    _lineColor

    constructor(x,y,_lineWidth = 1, lineColor="#000"){
        this._x = x
        this._y = y
        this._lineWidth = this._lineWidth
        this._lineColor = lineColor
    }

    set setLineWidth(lineWidth){
        this._lineWidth = lineWidth
    }

    set setColor(lineColor){
        this._lineColor = lineColor
    }

}
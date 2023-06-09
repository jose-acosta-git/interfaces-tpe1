class Ellipse extends Form {

    constructor(posX, posY, width, height, fill, context) {
        super(posX, posY, width, height, fill, context);
    }

    draw() {
        this.context.fillStyle = this.fill;
        this.context.beginPath();
        this.context.ellipse(this.posX, this.posY, this.width / 2, this.height / 2, 0, 0, 2 * Math.PI);
        this.context.fill();
        if (this.style)
            this.context.stroke(); 
    }

    isClicked(x, y) {
        const dx = (x -this.posX);
        const dy = (y - this.posY);
        const rx = (this.width / 2);
        const ry = (this.height / 2);

        return ( ( (dx*dx) / (rx*rx) <=1) && ( (dy*dy) / (ry*ry) <=1) );      
    }

}
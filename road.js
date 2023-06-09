// creation de la route
class Road{
    constructor(x,width,laneCount=3){
        // attributs de la route qu'elle garde en mémoire
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x-width/2;
        this.right = x+width/2;

        // road qui va a l'infini
        const infinity = 1000000000;
        this.top = -infinity;
        this.bottom =infinity;
    
    }
    // draw the road with 2 white vertical lines 
    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle = "white";

        // vertical line on the left side
        ctx.beginPath();
        ctx.moveTo(this.left,this.top);
        ctx.lineTo(this.left,this.bottom);
        ctx.stroke();

        // vertical line on the right side
        ctx.beginPath();
        ctx.moveTo(this.right,this.top);
        ctx.lineTo(this.right,this.bottom);
        ctx.stroke();
    }

}
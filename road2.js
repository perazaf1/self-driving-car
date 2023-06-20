// Construction de la voiture
class Road{
    constructor(x,width,laneCount=3){
        // attributs de la route qu'elle garde en mémoire
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        // road qui va a l'infini
        const infinity=1000000;
        this.top=-infinity;
        this.bottom=infinity;

        const topLeft={x:this.left,y:this.top};
        const topRight={x:this.right,y:this.top};
        const bottomLeft={x:this.left,y:this.bottom};
        const bottomRight={x:this.right,y:this.bottom};
        // know where the borders of the road are
        this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ];
    }

    // Know the center of a lane to put the car in the middle of the road
    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+
            Math.min(laneIndex,this.laneCount-1)*laneWidth;
            // car not outside the screen avec fonction min 
    }

    // draw the road with 2 white vertical lines 
    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";
        // loop for de 0 à laneCount
        for(let i=1;i<=this.laneCount-1;i++){
            const x=lerp( // coordonnées x de chaque ligne avec linear interpolation
                this.left,
                this.right,
                i/this.laneCount // percentage right and left : 0 and 1
            );
             // ajt des traits sur la route du milieu
            ctx.setLineDash([20,20]);
            // vertical line on the two sides
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
        });
    }
}

// fin de la voiture
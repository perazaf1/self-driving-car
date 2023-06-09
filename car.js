// Construction de la voiture
class Car{
    constructor(x,y,width,height){
        // attributs de la voiture
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        // controle de la voiture
        this.controls = new Controls();
    }

    // faire avancer la voiture
    update(){
        // aller en avant
        if (this.controls.forward) {
            this.y -= 2;  
        }
        // aller en arrière
        if (this.controls.reverse){
            this.y += 2;
        }
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            // construction du rectangle qui sert de voiture
            this.x-this.width/2,
            // dessin de la voiture
            this.y-this.height/2,
            // proportions de la voiture reative à 'écran
            this.width,
            this.height
        );
        ctx.fill();
    }
}
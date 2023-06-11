// Construction de la voiture
class Car{
    constructor(x,y,width,height){
        // attributs de la voiture
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // Vitesse de la voiture 
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        // friction pour ralentir la voiture
        this.friction = 0.05;
        // angle pour les rotations de la voiture
        this.angle = 0;
        // controle de la voiture
        this.controls = new Controls();
    }

    // faire avancer la voiture avec une méthode pour simplifier le code
    update(){
       this.#move();
    }
    // méthode move 
    #move(){
         // aller en avant
         if (this.controls.forward) {
            this.speed += this.acceleration;  // ajouter acccel pour aller en avant
        }
        // aller en arrière
        if (this.controls.reverse){
            this.speed -= this.acceleration;  // enelver l'acceleration pour aller en arrière
        }
        // pour faire ralentir la voiture
        if (this.speed>this.maxSpeed){
            this.speed = this.maxSpeed
        }
        if (this.speed < -this.maxSpeed/2){
            this.speed = -this.maxSpeed/2 // vitesse en reverse (voiture va en arrière donc -)
        }
        if (this.speed > 0){
            this.speed -= this.friction; // ajouter de la friction à la voiture
        }
        if(this.speed < 0){
            this.speed += this.friction // ajouter de la friction à la voiture si elle va en arrière
        }

        // voiture bouge tt le tps à cause de la friction
        if (Math.abs(this.speed)<this.friction){
            this.speed = 0
        }
        if (this.speed!=0){
            const flip = this.speed > 0?1:-1;
            // Aller à gauche et à droite et remettre les controles dans le bon sens avec flip
            if (this.controls.left){
                this.angle+= 0.03*flip;
            }
            if (this.controls.right){
                this.angle-= 0.03*flip;
            }
        } 
        // rotations de la voiture et sa direction avec le cerle trigonométrique
        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
    }

    draw(ctx){
        // rotations de la voiture
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
           // dessin de la voiture
            -this.width/2,  // construction du rectangle qui sert de voiture
            -this.height/2,
            // proportions de la voiture reative à 'écran
            this.width,
            this.height
        );
        ctx.fill();
        ctx.restore();// restore pour ne pas redessiner à chaque fois
    }
}
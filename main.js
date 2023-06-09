// Route
const canvas=document.getElementById("myCanvas");
canvas.width=200;

// Voiture
const ctx = canvas.getContext("2d");
const car=new Car(100,100,30,50);

animate();
// animer  la voiture
function animate(){
    car.update();
    
    canvas.height=window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
    // give the illusion of mvt
}
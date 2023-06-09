// Route
const canvas=document.getElementById("myCanvas");
canvas.width=200;

// Voiture
const ctx = canvas.getContext("2d");
// road
const road = new Road (canvas.width/2,canvas.width);
const car=new Car(100,100,30,50);

animate();
// animer  la voiture
function animate(){
    car.update();
    // moving the car and doesn't leave a trail 
    canvas.height=window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
    // give the illusion of mvt
}

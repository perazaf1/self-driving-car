// Route
const canvas = document.getElementById("myCanvas");
canvas.width = 200;

// Voiture
const ctx = canvas.getContext("2d");
// road
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);
// road.getLaneCenter(3)-> put the car on the third lane

animate();
// animer  la voiture
function animate() {
  car.update();
  canvas.height = window.innerHeight; // moving the car and doesn't leave a trail

  ctx.save();
  ctx.translate(0, -car.y); // translation de la position de la voiture
  road.draw(ctx); // draw the road before the car
  car.draw(ctx);
  ctx.restore();
  requestAnimationFrame(animate); // give the illusion of mvt
}

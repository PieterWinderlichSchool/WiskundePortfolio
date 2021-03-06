const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');





canvas.width = window.innerWidth;
canvas.height =window.innerHeight;


let face = new Image();
let secondsHand = new Image();

face.src = "clockFace.png";
secondsHand.src = "secondHand.png";

function animate(){
  let myTime = new Date();

  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(face,canvas.width/2-face.width/2,canvas.height/2-face.height/2);
  context.save();
  context.translate(canvas.width/2,canvas.height/2);
  context.rotate(2*Math.PI*myTime.getSeconds()/60);
  context.drawImage(secondsHand, -70,-233);
  context.restore();
}
animate();

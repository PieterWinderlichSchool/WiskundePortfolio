const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(300,500,20,"green");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let g = new LinearFunction(1,1);

let AB = new Point()


A.drag(); B.drag();C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  l.defineLineWithTwoPoint(A,B);
  l.draw(context);

  m.defineLineWithTwoPoint(B,C);
  m.draw(context);

  g.defineLineWithTwoPoint(C,A);
  g.draw(context);

  let D = new Point((A.x+B.x)/2,(A.y+B.y)/2, 20,"white");
  let E = new Point((B.x+C.x)/2,(B.y+C.y)/2, 20,"white");
  let F = new Point((C.x+A.x)/2,(C.y+A.y)/2, 20,"white");
  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  E.draw(context);
  F.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");

}
animate();

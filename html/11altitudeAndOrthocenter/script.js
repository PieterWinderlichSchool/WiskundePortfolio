const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(300,500,20,"green");

let k = new LinearFunction(1,1);
let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);




A.drag(); B.drag();C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  k.defineLineWithTwoPoints(A,B);
  k.draw(context);

  l.defineLineWithTwoPoints(B,C);
  l.draw(context);

  m.defineLineWithTwoPoints(C,A);
  m.draw(context);



  let D = new Point(0,0, 20,"white");
  let E = new Point(0,0, 20,"white");
  let F = new Point(0,0, 20,"white");

  let G = new Point(20,20,20, "White")

  let n = new LinearFunction(1,1);
  let o = new LinearFunction(1,1);
  let p = new LinearFunction(1,1);


  n.defineLineWithTwoPoints(A,D);
  n.slope = -1/l.slope;
  n.intercept=A.y - n.slope*A.x;

  o.slope = -1/m.slope;
  o.intercept=B.y - o.slope*B.x;

  p.slope = -1/k.slope;
  p.intercept=C.y - p.slope*C.x;





  G.x = o.interception(n).x;
  G.y = o.interception(n).y;

  n.draw(context);
  o.draw(context);
  p.draw(context);



  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  E.draw(context);
  F.draw(context);
  G.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");



}
animate();

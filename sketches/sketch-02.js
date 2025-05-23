const canvasSketch = require("canvas-sketch");
import random from "canvas-sketch-util/random";
import math from "canvas-sketch-util/math";

const settings = {
  dimensions: [1080, 1080],
  animate:true
};

// const degToRad = (deg) => {
//   return deg/180 * Math.PI
// }

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// }

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;

    let x,y;


    const num = 40
    const radius = width * 0.8



    for( let i = 0 ; i < num; i++){
      const slice = math.degToRad(360/num)
      const angle = slice * i

      x =  radius * Math.sin(angle)
      y = radius * Math.cos(angle)

      context.save()
      // context.translate(cx, cy)
      context.translate(x, y)
      context.rotate(-angle)
      context.scale(random.range(0.1,2),random.range(0.2,0.5))
      
      
      context.beginPath();
      context.rect(-w * 0.5,random.range(0,-h * 0.9), w, h);
      context.fill()
      context.restore()
      
      context.save()

      // context.translate(cx, cy)
      context.rotate(-angle)

      context.lineWidth = random.range(5,20)
      context.strokeStyle='red'
      context.beginPath()
      context.arc(0,0,radius * random.range(0.7,1.3),slice * random.range(1, -8),slice * random.range(1, 5))
      context.stroke()
      context.restore()
    }
  };
};

canvasSketch(sketch, settings);

// Adding Ctrl + S on web create a download on the folder of Output in the sketch directory.

//Settings on how to do the download are done on the const setting

// Check canvas Sketch documentation

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w 	= width  * 0.10;
    const h 	= height * 0.10;
    const gap = width  * 0.03;
    const ix 	= width  * 0.17;
    const iy 	= height * 0.17;

    const off = width  * 0.02;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = 'white'
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);

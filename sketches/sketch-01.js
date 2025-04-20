// Adding Ctrl + S on web create a download on the folder of Output in the sketch directory.

//Settings on how to do the download are done on the const setting

// Check canvas Sketch documentation

const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: 'A4',
  pixelsPerInch: 300,
  orientation: 'landscape'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const w = 60;
    const h = 60;
    const gap = 20;
    let x, y;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = 100 + (w + gap) * i;
        y = 100 + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + 8, y + 8, w - 16, h - 16);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);

// Adding Ctrl + S on web create a download on the folder of Output in the sketch directory.

//Settings on how to do the download are done on the const setting

// Check canvas Sketch documentation

const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: "A4",
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
        context.strokeStyle = 'blue'
          context.stroke();
          
          context.beginPath();
          context.arc(x + w / 2, y + h / 2, 10, 0, Math.PI * 2);
        context.strokeStyle = 'purple'
          context.stroke();
        }
        context.beginPath();
        context.arc(x + w / 2, y + h / 2, 19, 0, Math.PI * 2);
        context.stroke();
        
        context.beginPath();
        context.arc(x + w / 2, y + h / 2, 5, 0, Math.PI * 2);
        context.strokeStyle = 'red'
        context.stroke();
      }
    }
  };
};

canvasSketch(sketch, settings);

/// <reference path="../node_modules/@types/p5/global.d.ts" />
const fs = require('fs');
const canvasSketch = require('canvas-sketch');
const { setupP5, getCanvas } = require('@ericrav/p5.node');
const p5 = require('p5');
setupP5(p5);

const settings = {
  p5: true,
  dimensions: [800, 800],
};

const sketch = () => {
  background(255);
  noFill();
  let s = 255;
  translate(width / 2, height / 2);

  for (let i = 0; i < 800; i++) {
    stroke(color(s, s, s, (5 + Math.random() * 5) | 0));
    strokeWeight(1 + Math.random() * 5);
    rect(-25, -25, 50, 50);
    scale(1.003125 + Math.random() * 0.003125);
    rotate(0.025 + Math.random() * 0.025);
    s = Math.max(0, Math.min(255, (s - (Math.random() * 3 - 1)) | 0));
  }
};

canvasSketch(sketch, settings).then(() => {
  // Once sketch is loaded & rendered, stream a PNG with node-canvas
  const filename = 'output.png';
  const out = fs.createWriteStream(filename);
  const canvas = getCanvas();
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => console.log(`Saved ${filename}`));
});

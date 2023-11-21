/// <reference path="../node_modules/@types/p5/global.d.ts" />
const canvasSketch = require('canvas-sketch');
const p5 = require("p5");
new p5();

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
    stroke(color(s, s, s, 5 + (Math.random() * 5) | 0));
    strokeWeight(1 + Math.random() * 5);
    rect(-25, -25, 50, 50);
    scale(1.003125 + Math.random() * 0.003125);
    rotate(0.025 + Math.random() * 0.025);
    s = Math.max(0, Math.min(255, s - (Math.random() * 3 - 1) | 0));
  }

};

canvasSketch(sketch, settings);

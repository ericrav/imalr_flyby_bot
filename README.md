# FlyBy P5 Bot

## Setup

```
npm install
```

## Running Locally

This repo uses the creating coding tool [canvas-sketch](https://github.com/mattdesl/canvas-sketch)
by the artist [Matt DesLauriers](https://mattdesl.com/) with the `p5` integration.

### Run in browser:
```
npx canvas-sketch-cli sketches/sketch.js
```
This will start a server with a live-reloading sketch that can be opened in your browser locally.

### Save a high-res image via Node.js

To be able to run p5 in Node.js (where there is no browser or canvas), we use the library [p5.node](https://github.com/ericrav/p5.node).

To export the image, run:
```
node sketches/export.js
```

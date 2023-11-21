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

### Post images to Mastodon

Mastodon is an open-source, decentralized social network like Twitter that allows automated accounts (bots) to post.

To create your own Mastodon bot, create an account on a Mastodon instance like https://botsin.space/ (DM me for an invite code).

Once you have an account, go to Settings > Development (https://botsin.space/settings/applications) and create a new developer application.
Then, copy the access token it generates for you.

Create a `.env` file in the root of this repo with the following contents (& paste in your access token):

```
MASTODON_URL=https://botsin.space
MASTODON_ACCESS_TOKEN=
```


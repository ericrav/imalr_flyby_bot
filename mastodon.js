require('dotenv').config();

const fs = require('fs');
const mastodon = require('masto');

function postToMastodon() {
  if (!process.env.MASTODON_URL) {
    if (process.env.CI) {
      console.error('Missing MASTODON_URL in GitHub Actions secret');
    } else {
      console.error('Missing MASTODON_URL in .env file');
    }
    return;
  }

  if (!process.env.MASTODON_ACCESS_TOKEN) {
    if (process.env.CI) {
      console.error('Missing MASTODON_ACCESS_TOKEN in GitHub Actions secret');
    } else {
      console.error('Missing MASTODON_ACCESS_TOKEN in .env file');
    }
    return;
  }

  const masto = mastodon.createRestAPIClient({
    url: process.env.MASTODON_URL,
    accessToken: process.env.MASTODON_ACCESS_TOKEN,
  });

  // upload the image exported from our p5 sketch to Mastodon
  masto.v1.media
    .create({
      file: new Blob([fs.readFileSync('output.png')], {
        type: 'image/png',
      }),
      description: 'p5 sketch',
    })
    .then((media) => {
      // then after media is uploaded, post a status with the image attached
      masto.v1.statuses
        .create({
          visibility: 'public',
          // status: '(optional) text to go with the image',
          mediaIds: [media.id],
        })
        .then((status) => {
          console.log(status.url);
        });
    });
}

postToMastodon();

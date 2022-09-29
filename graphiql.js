/* eslint-disable @typescript-eslint/no-var-requires */
const exec = require('child_process').exec;
const os = require('os');

const getOpen = platform => {
  switch (platform) {
    case 'darwin':
      return 'open';
    case 'win32':
      return 'start';
    default:
      if (os.release().toLowerCase().includes('wsl')) {
        return 'wslview';
      }

      return 'xdg-open';
  }
};

const { CONTENTFUL_SPACE_ID, CONTENTFUL_PREVIEW_ACCESS_TOKEN, CONTENTFUL_ENV } = process.env;
const graphiqlLink = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV}/explore?access_token=${CONTENTFUL_PREVIEW_ACCESS_TOKEN}`;
const openCommand = getOpen(process.platform);

exec(`${openCommand} ${graphiqlLink}`, error => {
  if (error) {
    throw new Error(error);
  }
});

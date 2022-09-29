import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentVideo from 'components/Video/ComponentVideo';

const Template: ComponentStory<typeof ComponentVideo> = args => (
  <Section id="video">
    <ComponentVideo {...args} />
  </Section>
);

export const componentVideo = Template.bind({});
componentVideo.parameters = {
  controls: {
    include: ['heading', 'subheading'],
  },
};

componentVideo.args = {
  internalName: 'Dummy Video',
  heading: 'Storybook title for Modal',
  subheading: 'You can change your storybook subheading!',
  videoLength: '2:04',
  ctaButton: {
    ...iAsset,
    sys: {
      id: '2pOU31Tjcz2p5QVkn7t7tW',
      ...iSys,
    },
    __typename: 'ComponentButton',
    internalName: 'Dummy Button - Component Video Modal',
    label: 'Sign up for free',
    labelIcon: null,
    link: null,
    hierarchy: null,
    size: 'Large',
    startIcon: null,
    endIcon: null,
    rainbowHover: false,
  },
  bynderVideoAsset: [
    {
      id: '4AB369FC-10BC-40D6-9234BC2FBFAE102C',
      src: 'https://dam.freshworks.com/m/4e085972f56d667a/webimage-Hear-from-Asma-Akram.jpg',
      name: 'Hear from Asma Akram',
      tags: [],
      type: 'video',
      width: 0,
      height: 0,
      archive: 0,
      brandId: '8F17D55F-004D-4D20-86FDECFB43FBF507',
      limited: 0,
      fileSize: 6206038,
      isPublic: 1,
      original: 'https://dam.freshworks.com/m/4e085972f56d667a/original/Hear-from-Asma-Akram.mp4',
      copyright: null,
      extension: ['mp4'],
      thumbnails: {
        mini: 'https://dam.freshworks.com/m/4e085972f56d667a/mini-Hear-from-Asma-Akram.jpg',
        thul: 'https://dam.freshworks.com/m/4e085972f56d667a/thul-Hear-from-Asma-Akram.jpg',
        original: 'https://dam.freshworks.com/m/4e085972f56d667a/original/Hear-from-Asma-Akram.mp4',
        webimage: 'https://dam.freshworks.com/m/4e085972f56d667a/webimage-Hear-from-Asma-Akram.jpg',
      },
      dateCreated: '2022-07-28T08:36:34Z',
      description: 'This is a testimonial from our Employee',
      orientation: 'landscape',
      watermarked: 0,
      dateModified: '2022-07-28T08:38:18Z',
      datePublished: '2022-07-28T08:34:38Z',
      videoPreviewURLs: [
        'https://d2csxpduxe849s.cloudfront.net/media/0622F8EE-425D-4EE4-B9C72B7EB9A986F5/4AB369FC-10BC-40D6-9234BC2FBFAE102C/A83B07F1-49DB-4B65-B6037F7B1A293A31.mp4',
      ],
    },
  ],
};

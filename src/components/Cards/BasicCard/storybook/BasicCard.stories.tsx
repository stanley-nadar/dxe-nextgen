import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import BasicCard from 'components/Cards/BasicCard/BasicCard';

const Template: ComponentStory<typeof BasicCard> = args => <BasicCard {...args} />;

export const BasicCardStory = Template.bind({});
BasicCardStory.parameters = {
  controls: {
    include: [
      'size',
      'variant',
      'heading',
      'body',
      'media',
      'category',
      'longHeading',
      'date',
      'link',
      'categoryColor',
    ],
  },
};
BasicCardStory.args = {
  __typename: 'ComponentBasicCard',
  internalName: 'Dummy Card - Standard Image',
  size: 'md',
  variant: 'standard',
  category: 'Webinar',
  categoryColor: 'Gray',
  heading: 'Lorem ipsum dolor sit amet consectetur',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nulla lectus egestas non tristique.',
  longHeading: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Arcu nulla lectus egestas.',
  link: 'https://www.freshworks.com',
  date: '2022-05-22T00:00:00.000Z',
  mediaReference: {
    ...iAsset,
    sys: {
      ...iSys,
      id: '7gTBIpAiJbW8WgWVenVHP4',
    },
    __typename: 'ComponentImage',
    internalName: 'Dummy Image - Basic Card - Alex - Medium Sized',
    title: 'Alex - With Name',
    bynderImage: null,
    image: {
      ...iAsset,
      sys: {
        ...iSys,
        id: 'dMt7j1wKUPwXox1slAkSk',
      },
      __typename: 'Asset',
      contentType: 'image/png',
      title: 'Alexandra Dimiziani in Pink',
      description: 'Alexandra Dimiziani with a pink background',
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/dMt7j1wKUPwXox1slAkSk/05d2ef282cc11c4943f5c3975deac4c4/Freshworks-Card-Pink.png',
      width: 3141,
      height: 2124,
    },
  },
};

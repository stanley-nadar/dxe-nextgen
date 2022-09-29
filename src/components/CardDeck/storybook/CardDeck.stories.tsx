import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import CardDeck from 'components/CardDeck/CardDeck';

const Template: ComponentStory<typeof CardDeck> = args => (
  <Section id="Card Deck">
    <CardDeck {...args} />
  </Section>
);

export const componentCardDeck = Template.bind({});
componentCardDeck.parameters = {
  controls: {
    include: ['heading', 'eyebrow', 'headingDirection', 'centerHeadingContent'],
  },
};
componentCardDeck.args = {
  headingComponent: {
    sys: {
      id: '5AJBvPg9KauU2p7b1337',
      ...iSys,
    },
    ...iAsset,
    __typename: 'ComponentHeading',
    background: null,
    eyebrow: 'Heading Kicker',
    heading: 'What’s new with Freshworks',
    body: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim neque quis etiam felis, elementum in. Volutpat ut pharetra tincidunt hac enim quis sed velit.                ',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {
              target: {
                sys: {
                  id: '6kHI9RjJGpewVdneXsPDQt',
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            },
            content: [],
            nodeType: 'embedded-entry-block',
          },
          {
            data: {
              target: {
                sys: {
                  id: '1wlknObUfFnXtZlJULr3',
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            },
            content: [],
            nodeType: 'embedded-entry-block',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      links: {
        entries: {
          hyperlink: [],
          inline: [],
          block: [],
        },
        assets: {
          hyperlink: [],
          block: [],
        },
      },
    },
  },
  headingDirection: 'Column',
  centerHeadingContent: false,
  cardsCollection: {
    limit: 0,
    total: 0,
    skip: 0,
    items: [
      {
        ...iAsset,
        sys: {
          id: 'Card 1',
          ...iSys,
        },
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
        media: {
          sys: {
            id: 'dMt7j1wKUPwXox1slAkSk',
            ...iSys,
          },
          ...iAsset,
          contentType: 'image/png',
          __typename: 'Asset',
          title: 'Alexandra Dimiziani in Pink',
          description: 'Alexandra Dimiziani with a pink background',
          url: 'https://images.ctfassets.net/bmpbi2fhxoeu/dMt7j1wKUPwXox1slAkSk/05d2ef282cc11c4943f5c3975deac4c4/Freshworks-Card-Pink.png',
        },
      },
      {
        ...iAsset,
        sys: {
          id: 'Card 1',
          ...iSys,
        },
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
        media: {
          sys: {
            id: 'dMt7j1wKUPwXox1slAkSk',
            ...iSys,
          },
          ...iAsset,
          contentType: 'image/png',
          __typename: 'Asset',
          title: 'Alexandra Dimiziani in Pink',
          description: 'Alexandra Dimiziani with a pink background',
          url: 'https://images.ctfassets.net/bmpbi2fhxoeu/dMt7j1wKUPwXox1slAkSk/05d2ef282cc11c4943f5c3975deac4c4/Freshworks-Card-Pink.png',
        },
      },
      {
        ...iAsset,
        sys: {
          id: 'Card 1',
          ...iSys,
        },
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
        media: {
          sys: {
            id: 'dMt7j1wKUPwXox1slAkSk',
            ...iSys,
          },
          ...iAsset,
          contentType: 'image/png',
          __typename: 'Asset',
          title: 'Alexandra Dimiziani in Pink',
          description: 'Alexandra Dimiziani with a pink background',
          url: 'https://images.ctfassets.net/bmpbi2fhxoeu/dMt7j1wKUPwXox1slAkSk/05d2ef282cc11c4943f5c3975deac4c4/Freshworks-Card-Pink.png',
        },
      },
      {
        ...iAsset,
        sys: {
          id: 'Card 1',
          ...iSys,
        },
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
        media: {
          sys: {
            id: 'dMt7j1wKUPwXox1slAkSk',
            ...iSys,
          },
          ...iAsset,
          contentType: 'image/png',
          __typename: 'Asset',
          title: 'Alexandra Dimiziani in Pink',
          description: 'Alexandra Dimiziani with a pink background',
          url: 'https://images.ctfassets.net/bmpbi2fhxoeu/dMt7j1wKUPwXox1slAkSk/05d2ef282cc11c4943f5c3975deac4c4/Freshworks-Card-Pink.png',
        },
      },
    ],
  },
};

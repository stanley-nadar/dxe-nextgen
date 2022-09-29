import { ComponentStory } from '@storybook/react';
import { useWindowSize } from 'react-use';

import { IEntry } from 'graphql/types';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentHero from 'components/Hero/Hero';

import { getBackground } from 'utils/functions';

const Template: ComponentStory<typeof ComponentHero> = args => {
  const { background, __typename } = args;
  const { width } = useWindowSize();

  const { backgroundPath, backgroundGradient, backgroundIsDark } = getBackground(__typename, background, width);

  return (
    <Section id="hero" backgroundPath={backgroundPath} backgroundGradient={backgroundGradient}>
      <ComponentHero {...args} backgroundIsDark={backgroundIsDark} />
    </Section>
  );
};

export const componentHero = Template.bind({});
componentHero.parameters = {
  controls: {
    include: ['eyebrow', 'heading', 'background'],
  },
};

componentHero.args = {
  sys: {
    ...iSys,
    id: '4COv8fx3ecaK3mRTyjMF5g',
  },
  __typename: 'ComponentHero',
  internalName: 'Dummy Hero',
  background: 'Light Pattern',
  eyebrow: 'Lorem Ipsum',
  heading: 'Love your {% software %}',
  reference: {
    ...iAsset,
    ...iSys,
    sys: {
      ...iSys,
      id: '4COv8fx3ecaK3mRTyjMF5g',
    },
    __typename: 'ComponentImage',
    image: {
      ...iAsset,
      ...iSys,
      sys: {
        ...iSys,
        id: '2vq1fbt23dfZZCUl0lekN',
      },
      __typename: 'Asset',
      contentType: 'image/png',
      title: 'Hero Image Dummy 1',
      description: 'Female developer standing in front of an orange circle',
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/3jC0GX4v7mKbNrQkUz8gWw/f4dba67e89d661545279a561b0b2eb3d/Platform_Developers_Shapes.png',
      width: 834,
      height: 625,
    },
  },
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
              value: 'We make it fast and easy for your business to delight customers and employees.',
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
                id: '1wlknObUfFqwnXtZlJULr3',
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
        block: [
          {
            sys: {
              ...iSys,
              id: '6kHI9RjJGpewVdneXsPDQt',
            },
            ...iAsset,
            __typename: 'ComponentButton',
            internalName: 'Dummy Button Heading Primary',
            label: 'Start Free Trial',
            labelIcon: null,
            link: 'http://freshworks.com/',
            hierarchy: 'Primary Color',
            size: 'XLarge',
            startIcon: null,
            endIcon: null,
          } as IEntry,
          {
            sys: {
              ...iSys,
              id: '1wlknObUfFqwnXtZlJULr3',
            },
            ...iAsset,
            __typename: 'ComponentButton',
            internalName: 'Dummy Button Heading Secondary ',
            label: 'Contact Sales',
            labelIcon: null,
            link: 'http://freshworks.com/dummy',
            hierarchy: 'Link Color',
            size: 'Large',
            startIcon: null,
            endIcon: '>',
          } as IEntry,
        ],
      },
      assets: {
        hyperlink: [],
        block: [],
      },
    },
  },
};

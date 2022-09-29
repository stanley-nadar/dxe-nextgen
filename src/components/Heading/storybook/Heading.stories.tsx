import { ComponentStory } from '@storybook/react';
import { useWindowSize } from 'react-use';

import { IEntry } from 'graphql/types';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentHeading from 'components/Heading/Heading';

import { getBackground } from 'utils/functions';

const Template: ComponentStory<typeof ComponentHeading> = args => {
  const { background, __typename } = args;
  const { width } = useWindowSize();

  const { backgroundPath, backgroundGradient, backgroundIsDark } = getBackground(__typename, background, width);

  return (
    <Section id="heading" backgroundPath={backgroundPath} backgroundGradient={backgroundGradient}>
      <ComponentHeading {...args} backgroundIsDark={backgroundIsDark} />
    </Section>
  );
};

export const componentHeading = Template.bind({});
componentHeading.parameters = {
  controls: {
    include: ['eyebrow', 'heading', 'background'],
  },
};
componentHeading.args = {
  __typename: 'ComponentHeading',
  internalName: 'Dummy Hero',
  background: 'White',
  eyebrow: 'Heading Kicker',
  heading: 'Modern SaaS {% solutions %} for companies of all sizes.',
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
              value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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

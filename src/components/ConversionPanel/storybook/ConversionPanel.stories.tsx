import { ComponentStory } from '@storybook/react';

import { IEntry } from 'graphql/types';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ConversionPanel from 'components/ConversionPanel/ConversionPanel';

import { RichText } from 'utils/richTextParser';

const Template: ComponentStory<typeof ConversionPanel> = args => (
  <Section id="" backgroundPriority={false}>
    <ConversionPanel {...args} />
  </Section>
);

export const ConversionPanelStory = Template.bind({});
ConversionPanelStory.parameters = {
  controls: {
    include: ['contained', 'heading', 'eyebrow'],
  },
};
ConversionPanelStory.args = {
  sys: {
    ...iSys,
    id: '2H6YimfB7TDNYYdWK1u1jo',
  },
  __typename: 'ComponentConversionPanel',
  internalName: 'Dummy Conversion Panel',
  contained: true,
  background: 'Black Split',
  windowSize: { width: 1400 },
  containedBackground: 'White',
  eyebrow: 'Heading Eyebrow',
  heading: 'Start today, and enjoy our {% free trial %}',
  reference: {
    contentfulMetadata: {
      tags: [],
    },
    sys: {
      ...iSys,
      id: '4COv8fx3ecaK3mRTyjMF5g',
    },
    __typename: 'ComponentImage',
    internalName: 'Platform Developer Female Over Circle',
    image: {
      sys: {
        ...iSys,
        id: '2vq1fbtgcfmSZZCUl0lekN',
      },
      ...iAsset,
      __typename: 'Asset',
      contentType: 'image/png',
      title: 'Platform_Developer_Female_Selena',
      description: 'Female developer standing in front of an orange circle',
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/2vq1fbtgcfmSZZCUl0lekN/b28b34280b2ad9c8d9ace871414d364e/Platform_Developer_Female_Selena.png',
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vitae feugiat morbi vulputate id. ',
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
            __typename: 'ComponentButton',
            internalName: 'Dummy Button Heading Primary',
            label: 'Start Free Trial',
            labelIcon: null,
            link: null,
            hierarchy: 'Primary Color',
            size: 'XLarge',
            startIcon: null,
            endIcon: null,
          },
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
            link: null,
            hierarchy: 'Link Color',
            size: 'Large',
            startIcon: null,
            endIcon: '>',
          } as IEntry,
        ],
      },
      assets: {
        ...iAsset,
        hyperlink: [],
        block: [],
      },
    },
  } as RichText,
};

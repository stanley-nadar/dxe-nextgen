import { ComponentStory } from '@storybook/react';

import { IEntry } from 'graphql/types';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import Switchback from 'components/Switchback/Switchback';

const Template: ComponentStory<typeof Switchback> = args => (
  <Section id="" backgroundPriority={false}>
    <Switchback {...args} />
  </Section>
);

export const switchback = Template.bind({});
switchback.parameters = {
  controls: {
    include: ['heading', 'eyebrow', 'assetSide'],
  },
};
switchback.args = {
  internalName: 'Dummy Switchback Component',
  eyebrow: 'Lorem Ipsum',
  heading: 'Modern SaaS solutions for companies of all sizes',
  assetSide: 'Right',
  reference: {
    ...iAsset,
    ...iSys,
    sys: {
      ...iSys,
      id: '4COv8fx3ecaK3mRjMF5g',
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
      title: 'Switchback Image',
      description: '',
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/43pmt8gBQtgD3vpu6IXp7x/5da66d96a78e0e277686c418d764c040/Dummy_Conversion_Panel_Image.png',
      width: 968,
      height: 626,
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
              value:
                'We take a fresh approach to how businesses discover, engage with, and realize value from software throughout their journey.',
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
            link: null,
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
            link: null,
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

import { ComponentStory } from '@storybook/react';

import { IEntry } from 'graphql/types';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentAccolades from 'components/Accolades/Accolades';

const Template: ComponentStory<typeof ComponentAccolades> = args => (
  <Section id="accolades">
    <ComponentAccolades {...args} />
  </Section>
);

export const componentAccolades = Template.bind({});
componentAccolades.parameters = {
  controls: {
    include: ['heading', 'eyebrow'],
  },
};
componentAccolades.args = {
  __typename: 'ComponentAccolades',
  internalName: 'Dummy Accolades',
  heading: 'Trusted by 50K+ Customers',
  eyebrow: 'Heading Kicker',
  body: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'embedded-entry-block',
          data: {
            target: {
              sys: {
                ...iSys,
                id: '6kHI9RjJGpewVdneXsPDQt',
                type: 'Link',
                linkType: 'Entry',
              },
            },
          },
          content: [],
        },
        {
          nodeType: 'embedded-entry-block',
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
        },
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: '',
              marks: [],
              data: {},
            },
          ],
        },
      ],
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
            internalName: 'Dummy Button Primary',
            label: 'Start Free Trial',
            labelIcon: null,
            link: 'https://freshworks.com/',
            hierarchy: 'Primary Color',
            size: 'XLarge',
            startIcon: null,
            endIcon: null,
            rainbowHover: null,
          } as IEntry,
          {
            sys: {
              ...iSys,
              id: '1wlknObUfFqwnXtZlJULr3',
            },
            ...iAsset,
            __typename: 'ComponentButton',
            internalName: 'Dummy Button Secondary ',
            label: 'Contact Sales',
            labelIcon: null,
            link: null,
            hierarchy: 'Link Color',
            size: 'Large',
            startIcon: null,
            endIcon: '>',
            rainbowHover: null,
          } as IEntry,
        ],
      },
      assets: {
        hyperlink: [],
        block: [],
      },
    },
  },
  accoladesImageCollection: {
    limit: 4,
    total: 4,
    skip: 0,
    items: [
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '7Ln12amJKi4OdckogaDVsA',
        },
        __typename: 'ComponentImage',
        internalName: 'Accolades Dummy - Captera',
        title: null,
        image: {
          sys: {
            ...iSys,
            id: '4P8e5xF3foZOfQfybBABhH',
          },
          ...iAsset,
          __typename: 'Asset',
          contentType: 'image/png',
          title: 'Captera',
          description: '',
          url: 'https://images.ctfassets.net/bmpbi2fhxoeu/4P8e5xF3foZOfQfybBABhH/5e667b8181714ce54a0372972c855eab/Captera.png',
          width: 220,
          height: 240,
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '4kONyNwa7gWUnJjnAbRtc',
        },
        __typename: 'ComponentImage',
        internalName: 'Accolades Dummy - Captera',
        title: null,
        image: {
          sys: {
            ...iSys,
            id: '6EGzRjywbblI7McmmCTn4a',
          },
          ...iAsset,
          __typename: 'Asset',
          contentType: 'image/png',
          title: 'Captera',
          description: '',
          url: 'https://images.ctfassets.net/bmpbi2fhxoeu/6EGzRjywbblI7McmmCTn4a/fc22ab1a985a268d2a6ec90f3356d3a3/Gartner.png',
          width: 220,
          height: 240,
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: 'RYqgrbCXWWmY6hWK1o5uS',
        },
        __typename: 'ComponentImage',
        internalName: 'Accolades Dummy - Captera',
        title: null,
        image: {
          sys: {
            ...iSys,
            id: '7KqHeMVx41xn7kZdcCgBJz',
          },
          ...iAsset,
          __typename: 'Asset',
          contentType: 'image/png',
          title: 'Captera',
          description: '',
          url: 'https://images.ctfassets.net/bmpbi2fhxoeu/7KqHeMVx41xn7kZdcCgBJz/04d36167f15c904d391638448b568606/Finances_Online.png',
          width: 220,
          height: 240,
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '2gnyBvJG3iJEnyBX3yVKBa',
        },
        __typename: 'ComponentImage',
        internalName: 'Accolades Dummy - Captera',
        title: null,
        image: {
          sys: {
            ...iSys,
            id: '3D97yLNmmlWBC2wwSF14M9',
          },
          ...iAsset,
          __typename: 'Asset',
          contentType: 'image/png',
          title: 'Captera',
          description: '',
          url: 'https://images.ctfassets.net/bmpbi2fhxoeu/3D97yLNmmlWBC2wwSF14M9/2f824cc52c818d858c82405843305a33/G2.png',
          width: 220,
          height: 240,
        },
      },
    ],
  },
};

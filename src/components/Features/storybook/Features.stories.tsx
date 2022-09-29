import { ComponentStory } from '@storybook/react';
import { useWindowSize } from 'react-use';

import { IEntry } from 'graphql/types';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentFeatures from 'components/Features/Features';

import { getBackground } from 'utils/functions';

const Template: ComponentStory<typeof ComponentFeatures> = args => {
  const { background, __typename } = args;
  const { width } = useWindowSize();
  const { backgroundPath, backgroundGradient, backgroundIsDark } = getBackground(__typename, background, width);

  return (
    <Section id="features" backgroundPath={backgroundPath} backgroundGradient={backgroundGradient}>
      <ComponentFeatures {...args} backgroundIsDark={backgroundIsDark} />
    </Section>
  );
};

export const componentFeatures = Template.bind({});

componentFeatures.parameters = {
  controls: {
    include: ['eyebrow', 'heading', 'imageSide', 'background'],
  },
};
componentFeatures.args = {
  __typename: 'ComponentFeatures',
  background: 'White',
  eyebrow: 'Freshworks Features',
  heading: 'Some of the great features that makeup Freshworks',
  imageSide: 'Right',
  featuresImage: {
    ...iAsset,
    sys: {
      id: 'KDFS938372',
      ...iSys,
    },
    image: {
      ...iAsset,
      sys: {
        id: '4DA7kWkUHrW6ao1PGISh49',
        ...iSys,
      },
      __typename: 'Asset',
      contentType: 'image/png',
      title: 'Features Image',
      description: 'Image used for the Features Component',
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/4DA7kWkUHrW6ao1PGISh49/5a90878aae7841a3152f29c11f4f1646/Features_Image.png',
      width: 657,
      height: 581,
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
  featureCardsCollection: {
    limit: 4,
    total: 4,
    skip: 0,
    items: [
      {
        ...iAsset,
        sys: {
          id: '4E1337vT9WxV53',
          ...iSys,
        },
        __typename: 'ComponentFeaturesCard',
        internalName: 'Dummy Feature Card - Pricing',
        icon: 'Choose Your Pricing Plan',
        heading: 'Lorem ipsum dolor sit',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis in justo blandit quis.',
      },
      {
        ...iAsset,
        sys: {
          id: '4ERW1337DF',
          ...iSys,
        },
        __typename: 'ComponentFeaturesCard',
        internalName: 'Dummy Feature Card - Running',
        icon: 'Get Up Running',
        heading: 'Lorem ipsum dolor sit',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis in justo blandit quis.',
      },
      {
        ...iAsset,
        sys: {
          id: '4E4bRwPchappieT9WxV53',
          ...iSys,
        },
        __typename: 'ComponentFeaturesCard',
        internalName: 'Dummy Feature Card - Release',
        icon: 'Product Release',
        heading: 'Lorem ipsum dolor sit',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis in justo blandit quis.',
      },
      {
        ...iAsset,
        sys: {
          id: '4E4bRwPPG12312PcvT9WxV53',
          ...iSys,
        },
        __typename: 'ComponentFeaturesCard',
        internalName: 'Dummy Feature Card - Health',
        icon: 'Health Wellness',
        heading: 'Lorem ipsum dolor sit',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis in justo blandit quis.',
      },
    ],
  },
  callToAction: {
    ...iAsset,
    sys: {
      id: '12dmfsfksdfkdkf',
      ...iSys,
    },
    __typename: 'ComponentButton',
    endIcon: '>',
    hierarchy: 'Link Color',
    internalName: 'Dummy Button Secondary - View All Features Dark',
    label: 'View All Features',
    labelIcon: null,
    link: 'https://freshworks.com/dummy',
    rainbowHover: false,
    size: 'Large',
    startIcon: null,
  },
};

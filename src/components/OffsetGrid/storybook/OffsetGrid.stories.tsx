import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentOffsetGridCard from 'components/OffsetGrid/OffsetGrid';

const Template: ComponentStory<typeof ComponentOffsetGridCard> = args => (
  <Section id="" backgroundPriority={false}>
    <ComponentOffsetGridCard {...args} />
  </Section>
);

export const componentOffsetGrid = Template.bind({});
componentOffsetGrid.parameters = {
  controls: {
    include: ['eyebrow', 'heading'],
  },
};
componentOffsetGrid.args = {
  eyebrow: 'freshworks products',
  heading: 'Modern SaaS solutions for companies of all sizes',
  reference: {
    ...iAsset,
    sys: {
      id: '4owptyZqE3FBdYVHCFChu3',
      ...iSys,
    },
    __typename: 'ComponentImage',
    internalName: 'Dummy Offset Image',
    title: 'Dummy Offset',
    image: {
      ...iAsset,
      sys: {
        id: '9iThVytPU4UwJ7Gpe2Tgi',
        ...iSys,
      },
      __typename: 'Asset',
      contentType: 'image/png',
      title: 'OffsetGrid Illustration',
      description: null,
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/9iThVytPU4UwJ7Gpe2Tgi/fd76d36595f26a18604918147f1d3ba6/OffsetGrid_Image.png',
      width: 509,
      height: 783,
    },
  },
  offsetGridCardsCollection: {
    limit: 6,
    total: 6,
    skip: 0,
    items: [
      {
        sys: {
          id: '5AJBvPg9KauU2p7bI5E3D7',
          ...iSys,
        },
        ...iAsset,
        internalName: 'Offset Card - Customer Service',
        __typename: 'ComponentOffsetGridCard',
        heading: 'Customer Service',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, fermentum mi congue.',
        link: 'https://www.freshworks.com',
      },
      {
        sys: {
          id: '1ZzgScdfYq6BYRmr7Pk2AH',
          ...iSys,
        },
        ...iAsset,
        internalName: 'Offset Card - HR Management',
        __typename: 'ComponentOffsetGridCard',
        heading: 'HR Management',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, fermentum mi congue.',
        link: 'https://www.freshworks.com',
      },
      {
        sys: {
          id: '4L2qVBzuWb5AIFZTXkF7n5',
          ...iSys,
        },
        ...iAsset,
        internalName: 'Offset Card - Marketing Automation',
        __typename: 'ComponentOffsetGridCard',
        heading: 'Marketing Automation',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, fermentum mi congue.',
        link: 'https://www.freshworks.com',
      },
      {
        sys: {
          id: '4usI8imp8sD0ubo0tgxMlV',
          ...iSys,
        },
        ...iAsset,
        internalName: 'Offset Card - IT Service Management',
        __typename: 'ComponentOffsetGridCard',
        heading: 'IT Service Management',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, fermentum mi congue.',
        link: 'https://www.freshworks.com',
      },
      {
        sys: {
          id: '6ezzMIWLGklPZ15z5fwumX',
          ...iSys,
        },
        ...iAsset,
        internalName: 'Offset Card - Sales Automation',
        __typename: 'ComponentOffsetGridCard',
        heading: 'Sales Automation',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, fermentum mi congue.',
        link: 'https://www.freshworks.com',
      },
      {
        sys: {
          id: 'Tk3EWuHlOnrsDfOtaWTce',
          ...iSys,
        },
        ...iAsset,
        internalName: 'Offset Card - All Products & Trials',
        __typename: 'ComponentOffsetGridCard',
        heading: 'All Products & Trials',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, fermentum mi congue.',
        link: 'https://www.freshworks.com',
      },
    ],
  },
};

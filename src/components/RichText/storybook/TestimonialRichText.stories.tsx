import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import TestimonialRichText from 'components/RichText/TestimonialRichText';

const Template: ComponentStory<typeof TestimonialRichText> = args => (
  <Section id="Testimonial Rich Text">
    <TestimonialRichText {...args} />
  </Section>
);

export const componentTestimonialRichText = Template.bind({});
componentTestimonialRichText.parameters = {
  controls: {
    include: ['person', 'quote'],
  },
};

componentTestimonialRichText.args = {
  __typename: 'ComponentTestimonialCard',
  quote: {
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
                '“Freshdesk helped us in making sure that no matter what time of day, the customer could contact us on one platform, and we had complete visibility of the ticket and understood the history of the enquiry as well."',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
    links: {
      assets: {
        __typename: 'ComponentTestimonialCardQuoteAssets',
        block: [],
        hyperlink: [],
      },
      entries: {
        __typename: 'ComponentTestimonialCardQuoteEntries',
        block: [],
        inline: [],
        hyperlink: [],
      },
    },
  },
  person: {
    ...iAsset,
    sys: {
      ...iSys,
      id: '55YKg8BvZjHu8KCnthrKVz',
    },
    fullName: 'Jane Smith',
    role: 'VP of Marketing',
    company: {
      ...iAsset,
      sys: {
        ...iSys,

        id: '2xnznFuFNgIBw4Gdd1punz',
      },
      name: 'Klarna',
      logoLight: {
        ...iAsset,
        sys: {
          ...iSys,

          id: '1F2CRffOZIlbPG2LFX0wPa',
        },
        __typename: 'Asset',
        contentType: 'image/svg+xml',
        title: 'Klarna Logo Grey',
        description: '',
        url: 'https://images.ctfassets.net/bmpbi2fhxoeu/1F2CRffOZIlbPG2LFX0wPa/684980c59cb56799b4b2a9017beec70b/Klarna-logo.svg',
        width: 113,
        height: 25,
      },
      logoDark: {
        ...iAsset,
        sys: {
          ...iSys,

          id: '4OgEKUSrFVVWZ2F3XJQ4JA',
        },
        __typename: 'Asset',
        contentType: 'image/svg+xml',
        title: 'Klarna Logo White',
        description: '',
        url: 'https://images.ctfassets.net/bmpbi2fhxoeu/4OgEKUSrFVVWZ2F3XJQ4JA/7b7cedc84da61e728f4396e534aca522/Klarna-logo-1.svg',
        width: 113,
        height: 25,
      },
    },
  },
  image: {
    ...iAsset,
    sys: {
      ...iSys,
      id: 'gJQnZlO2AIz1KrhQLB7qZ',
    },
    __typename: 'ComponentImage',
    internalName: 'Klarna',
    title: 'Klarna',
    image: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '3nLCrOvYvKZ54KTMyNw4oj',
      },
      __typename: 'Asset',
      contentType: 'image/png',
      title: 'Klarna',
      description: 'A box with Klarna in it',
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/3nLCrOvYvKZ54KTMyNw4oj/3f74cdc9aa2eada7f891467f7f1fe902/Image__2_.png',
      width: 400,
      height: 400,
    },
  },
};

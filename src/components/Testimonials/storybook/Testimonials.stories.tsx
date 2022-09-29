import { ComponentStory } from '@storybook/react';

import { iAsset, iCollection, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import Testimonials from 'components/Testimonials/Testimonials';

import { getBackground } from 'utils/functions';

const Template: ComponentStory<typeof Testimonials> = ({ __typename, background, ...args }) => {
  const { backgroundColor } = getBackground(__typename, background, 0);

  return (
    <Section id="Testimonials" backgroundSectionColor={backgroundColor}>
      <Testimonials background={background} {...args} />
    </Section>
  );
};

export const TestimonialsStory = Template.bind({});
TestimonialsStory.parameters = {
  controls: {
    include: ['contained', 'background'],
  },
};
TestimonialsStory.args = {
  sys: {
    ...iSys,
    id: '3Z357t1F9ZIZEzdssoVZSf',
  },
  __typename: 'ComponentTestimonials',
  internalName: 'Dummy Testimonials ',
  contained: true,
  background: 'Primary Green-400',
  headingComponent: {
    ...iAsset,
    sys: {
      ...iSys,
      id: '2LMfIJqtVA5e9U1YdMOBes',
    },
    __typename: 'ComponentHeading',
    internalName: 'Dummy Heading - Testimonials',
    eyebrow: 'HEADING KICKER',
    background: 'White',
    heading: 'Component: Testimonials',
    body: {
      json: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim neque quis etiam felis, elementum in. Volutpat ut pharetra tincidunt hac enim quis sed velit.',
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      links: {
        entries: {
          ...iAsset,
          inline: [],
          block: [],
        },
        assets: {
          ...iAsset,
          block: [],
        },
      },
    },
  },
  testimonialCardsCollection: {
    ...iCollection,
    items: [
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '6IcEaLfrwQnVW1q1nCtJLM',
        },
        __typename: 'ComponentTestimonialCard',
        internalName: 'Dummy Testimonial Card',
        fullStoryUrl: 'https://www.freshworks.com',
        background: 'Primary Orange-300',
        quote: {
          links: {
            entries: {
              ...iAsset,
              inline: [],
              block: [],
            },
            assets: {
              ...iAsset,
              block: [],
            },
          },
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
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '6IcEaLfrwQnVW1q1nCtJLM',
        },
        __typename: 'ComponentTestimonialCard',
        internalName: 'Dummy Testimonial Card',
        fullStoryUrl: 'https://www.freshworks.com',
        background: 'Primary Orange-300',
        quote: {
          links: {
            entries: {
              ...iAsset,
              inline: [],
              block: [],
            },
            assets: {
              ...iAsset,
              block: [],
            },
          },
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
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '6IcEaLfrwQnVW1q1nCtJLM',
        },
        __typename: 'ComponentTestimonialCard',
        internalName: 'Dummy Testimonial Card',
        fullStoryUrl: 'https://www.freshworks.com',
        background: 'Primary Orange-300',
        quote: {
          links: {
            entries: {
              ...iAsset,
              inline: [],
              block: [],
            },
            assets: {
              ...iAsset,
              block: [],
            },
          },
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
      },
    ],
  },
};

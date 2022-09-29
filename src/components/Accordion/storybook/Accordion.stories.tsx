import { ComponentStory } from '@storybook/react';

import { IEntry } from 'graphql/types';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentAccordion from 'components/Accordion/Accordion';

const Template: ComponentStory<typeof ComponentAccordion> = args => (
  <Section id="" backgroundPriority={false}>
    <ComponentAccordion {...args} />
  </Section>
);

export const componentAccordion = Template.bind({});
componentAccordion.parameters = {
  controls: {
    include: ['eyebrow', 'heading', 'variant'],
  },
};
componentAccordion.args = {
  internalName: 'Dummy Accordion',
  eyebrow: 'FAQs',
  heading: 'Frequently Asked Questions',
  variant: 'Left Heading Single',
  accordionItemsCollection: {
    limit: 6,
    total: 6,
    skip: 0,
    items: [
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '2z9mdsNqYVbsKvD4cCXQ1k',
        },
        __typename: 'ComponentListItem',
        internalName: 'Dummy Accordion Item - Free Trial',
        title: 'Is there a free trial available?',
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
                      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          links: {
            assets: {
              hyperlink: [],
              block: [],
            },
            entries: {
              hyperlink: [],
              block: [],
              inline: [],
            },
          },
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: 'z9mdsNweweqYVbsKvD4cCXQ1k',
        },
        __typename: 'ComponentListItem',
        internalName: 'Dummy Accordion Item - Free Trial',
        title: 'How does billing work?',
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
                      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          links: {
            assets: {
              hyperlink: [],
              block: [],
            },
            entries: {
              hyperlink: [],
              block: [],
              inline: [],
            },
          },
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '2zKvD4cCXQ',
        },
        __typename: 'ComponentListItem',
        internalName: 'Dummy Accordion Item - Free Trial',
        title: 'Lorem ipsum dolor sit amet?',
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
                      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          links: {
            assets: {
              hyperlink: [],
              block: [],
            },
            entries: {
              hyperlink: [],
              block: [],
              inline: [],
            },
          },
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '2z9mds4cCXQ1k',
        },
        __typename: 'ComponentListItem',
        internalName: 'Dummy Accordion Item - Free Trial',
        title: 'Lorem ipsum dolor sit amet?',
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
                      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          links: {
            assets: {
              hyperlink: [],
              block: [],
            },
            entries: {
              hyperlink: [],
              block: [],
              inline: [],
            },
          },
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '2zweqYVbsKvD4cCXQ1k',
        },
        __typename: 'ComponentListItem',
        internalName: 'Dummy Accordion Item - Free Trial',
        title: 'Lorem ipsum dolor sit amet?',
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
                      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          links: {
            assets: {
              hyperlink: [],
              block: [],
            },
            entries: {
              hyperlink: [],
              block: [],
              inline: [],
            },
          },
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '2z9mdsNweweqYVbsKvD4cCXQ1',
        },
        __typename: 'ComponentListItem',
        internalName: 'Dummy Accordion Item - Free Trial',
        title: 'Lorem ipsum dolor sit amet?',
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
                      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          links: {
            assets: {
              hyperlink: [],
              block: [],
            },
            entries: {
              hyperlink: [],
              block: [],
              inline: [],
            },
          },
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '2z9cCXQ1k',
        },
        __typename: 'ComponentListItem',
        internalName: 'Dummy Accordion Item - Free Trial',
        title: 'Lorem ipsum dolor sit amet?',
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
                      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          links: {
            assets: {
              hyperlink: [],
              block: [],
            },
            entries: {
              hyperlink: [],
              block: [],
              inline: [],
            },
          },
        },
      },
      {
        contentfulMetadata: {
          tags: [],
        },
        sys: {
          ...iSys,
          id: '2z9md4cCXQ1k',
        },
        __typename: 'ComponentListItem',
        internalName: 'Dummy Accordion Item - Free Trial',
        title: 'Lorem ipsum dolor sit amet?',
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
                      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          links: {
            assets: {
              hyperlink: [],
              block: [],
            },
            entries: {
              hyperlink: [],
              block: [],
              inline: [],
            },
          },
        },
      },
    ],
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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, lorem magna lectus viverra leo platea. Sed viverra fringilla arcu et hendrerit porta non. Neque metus, turpis vulputate at quis blandit in..',
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
            label: 'Learn More',
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

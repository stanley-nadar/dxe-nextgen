import { ComponentStory } from '@storybook/react';

import { IEntry } from 'graphql/types';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import CaseStudies from 'components/CaseStudies/CaseStudies';

const Template: ComponentStory<typeof CaseStudies> = args => (
  <Section id="Case Studies">
    <CaseStudies {...args} />
  </Section>
);

export const componentCaseStudies = Template.bind({});
componentCaseStudies.parameters = {
  controls: {
    include: [],
  },
};
componentCaseStudies.args = {
  headingComponent: {
    sys: {
      id: '5AJBvPg9KauU2p7b1337',
      ...iSys,
    },
    ...iAsset,
    __typename: 'ComponentHeading',
    background: null,
    eyebrow: 'Heading Eyebrow',
    heading: 'Delightful customer experiences are the norm at Freshworks',
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
  },
  caseStudyCardsCollection: {
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
        __typename: 'ComponentCaseStudyCard',
        internalName: 'Dummy Case Study Card 1',
        caseStudyLinkButton: {
          ...iAsset,
          sys: {
            id: '1FJMkxL24uqvAcRJR2mjxd',
            ...iSys,
          },
          __typename: 'ComponentButton',
          internalName: 'Dummy Button - Case Studies Link',
          label: 'View Case Study',
          labelIcon: null,
          link: null,
          hierarchy: 'Link Color',
          size: 'Small',
          startIcon: null,
          endIcon: '>',
          rainbowHover: false,
        },
        caseStudyImage: {
          ...iAsset,
          sys: {
            id: 'dQSDI4L802P2WbtRsUla8',
            ...iSys,
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Case Study Card Image',
          title: 'Case Study Card Image',
          image: {
            ...iAsset,
            sys: {
              id: '7HROE3BGM7owUA37IgeNK0',
              ...iSys,
            },
            __typename: 'Asset',
            contentType: 'image/png',
            title: 'Case Study Card Image',
            description: 'Image used inside Case Study Card Image.',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/7HROE3BGM7owUA37IgeNK0/1258622bcf3fc76308512fe59ed5f112/Case_Study_Image_full.png',
            width: 1196,
            height: 500,
          },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        caseStudyStats: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '99%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' increase in traffic',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '300%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' Self-service use',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '25%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' Increase in Sales',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
                      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, urna tempor faucibus mi iaculis mauris gravida accumsan. Dolor, urna tempor faucibus ',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: 'mi iaculis mauris gravida accumsan',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: '”',
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
              id: '14TbTnz3vqxeu3GKVn3Ipp',
            },
            name: 'Klarna',
            logoLight: null,
            logoDark: null,
          },
        },
      },
      {
        sys: {
          id: '5AJBvPg9KauU2p7bI5E3D7',
          ...iSys,
        },
        ...iAsset,
        __typename: 'ComponentCaseStudyCard',
        internalName: 'Dummy Case Study Card 1',
        caseStudyLinkButton: {
          ...iAsset,
          sys: {
            id: '1FJMkxL24uqvAcRJR2mjxd',
            ...iSys,
          },
          __typename: 'ComponentButton',
          internalName: 'Dummy Button - Case Studies Link',
          label: 'View Case Study',
          labelIcon: null,
          link: null,
          hierarchy: 'Link Color',
          size: 'Small',
          startIcon: null,
          endIcon: '>',
          rainbowHover: false,
        },
        caseStudyImage: {
          ...iAsset,
          sys: {
            id: 'dQSDI4L802P2WbtRsUla8',
            ...iSys,
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Case Study Card Image',
          title: 'Case Study Card Image',
          image: {
            ...iAsset,
            sys: {
              id: '7HROE3BGM7owUA37IgeNK0',
              ...iSys,
            },
            __typename: 'Asset',
            contentType: 'image/png',
            title: 'Case Study Card Image',
            description: 'Image used inside Case Study Card Image.',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/7HROE3BGM7owUA37IgeNK0/1258622bcf3fc76308512fe59ed5f112/Case_Study_Image_full.png',
            width: 1196,
            height: 500,
          },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        caseStudyStats: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '99%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' increase in traffic',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '300%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' Self-service use',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '25%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' Increase in Sales',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
                      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, urna tempor faucibus mi iaculis mauris gravida accumsan. Dolor, urna tempor faucibus ',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: 'mi iaculis mauris gravida accumsan',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: '”',
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
              id: '14TbTnz3vqxeu3GKVn3Ipp',
            },
            name: 'Klarna',
            logoLight: null,
            logoDark: null,
          },
        },
      },
      {
        sys: {
          id: '5AJBvPg9KauU2p7bI5E3D7',
          ...iSys,
        },
        ...iAsset,
        __typename: 'ComponentCaseStudyCard',
        internalName: 'Dummy Case Study Card 1',
        caseStudyLinkButton: {
          ...iAsset,
          sys: {
            id: '1FJMkxL24uqvAcRJR2mjxd',
            ...iSys,
          },
          __typename: 'ComponentButton',
          internalName: 'Dummy Button - Case Studies Link',
          label: 'View Case Study',
          labelIcon: null,
          link: null,
          hierarchy: 'Link Color',
          size: 'Small',
          startIcon: null,
          endIcon: '>',
          rainbowHover: false,
        },
        caseStudyImage: {
          ...iAsset,
          sys: {
            id: 'dQSDI4L802P2WbtRsUla8',
            ...iSys,
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Case Study Card Image',
          title: 'Case Study Card Image',
          image: {
            ...iAsset,
            sys: {
              id: '7HROE3BGM7owUA37IgeNK0',
              ...iSys,
            },
            __typename: 'Asset',
            contentType: 'image/png',
            title: 'Case Study Card Image',
            description: 'Image used inside Case Study Card Image.',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/7HROE3BGM7owUA37IgeNK0/1258622bcf3fc76308512fe59ed5f112/Case_Study_Image_full.png',
            width: 1196,
            height: 500,
          },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        caseStudyStats: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '99%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' increase in traffic',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '300%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' Self-service use',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: '25%',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ' Increase in Sales',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
                      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, urna tempor faucibus mi iaculis mauris gravida accumsan. Dolor, urna tempor faucibus ',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: 'mi iaculis mauris gravida accumsan',
                    nodeType: 'text',
                  },
                  {
                    data: {},
                    marks: [],
                    value: '”',
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
              id: '14TbTnz3vqxeu3GKVn3Ipp',
            },
            name: 'Klarna',
            logoLight: null,
            logoDark: null,
          },
        },
      },
    ],
  },
};

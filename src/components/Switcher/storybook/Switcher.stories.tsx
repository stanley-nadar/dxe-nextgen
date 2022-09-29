import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentSwitcher from 'components/Switcher/Switcher';

const Template: ComponentStory<typeof ComponentSwitcher> = args => (
  <Section id="" backgroundPriority={false}>
    <ComponentSwitcher {...args} />
  </Section>
);

export const componentSwitcher = Template.bind({});
componentSwitcher.parameters = {
  options: { showPanel: false },
};
componentSwitcher.args = {
  internalName: 'ComponentSwitcher',
  headingComponent: {
    sys: {
      id: '5AJBvPg9KauU2p7b1337',
      ...iSys,
    },
    ...iAsset,
    __typename: 'ComponentHeading',
    background: null,
    eyebrow: 'Heading Kicker',
    heading: 'Lorem ipsum dolar sit amet',
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
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim neque quis etiam felis, elementum in. Volutpat ut pharetra tincidunt hac enim quis sed velit.                ',
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
          block: [],
        },
        assets: {
          hyperlink: [],
          block: [],
        },
      },
    },
  },
  switcherItemsCollection: {
    limit: 0,
    total: 0,
    skip: 0,
    items: [
      {
        ...iAsset,
        sys: {
          id: '3OASY6l5FJW65PIAfZ1POF',
          ...iSys,
        },
        switcherItemTitle: 'Featured Item 1',
        heading: 'Modern SaaS solutions for companies of all sizes',
        subheading:
          'We take a fresh approach to how businesses discover, engage with, and realize value from software throughout their journey.',
        switcherItemList: {
          ...iAsset,
          sys: {
            id: '3Vj33uogdVa8nQ0b5l4N5D',
            ...iSys,
          },
          __typename: 'ComponentList',
          internalName: 'Dummy List - Switcher',
          listItemsCollection: {
            limit: 0,
            total: 0,
            skip: 0,
            items: [
              {
                ...iAsset,
                sys: {
                  id: '3GWzxIF3pYlvwOUOrwCcAO',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher',
                title: 'Feature 1',
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
                            value: 'This is a feature paragraph where you can talk about the feature.',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '7d5fENneXscQKLk1RXpsvp',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 2',
                title: 'Feature 2',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '4NLXFt4oPca2lz60xfOPRy',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 3',
                title: 'Feature 3',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
            ],
          },
        },
        primaryButton: {
          ...iAsset,
          sys: {
            id: '6kHI9RjJGpewVdneXsPDQt',
            ...iSys,
          },
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
        },
        secondaryButton: {
          ...iAsset,
          sys: {
            id: '1wlknObUfFqwnXtZlJULr3',
            ...iSys,
          },
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
        },
        switcherItemImage: {
          ...iAsset,
          sys: {
            id: 'Pq80FdA46SP071Z5THGmC',
            ...iSys,
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Switcher Image',
          title: 'Dummy Switcher Item Image',
          image: {
            ...iAsset,
            sys: {
              id: '16Cx5gw5zCRng98Iip2jjg',
              ...iSys,
            },
            __typename: 'Asset',
            contentType: 'image/png',
            title: 'Dummy Switcher Image',
            description: 'Image used inside the Switcher Item Image.',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/16Cx5gw5zCRng98Iip2jjg/c4a188e774cd57dfb33096e8cd79e9de/Switcher_Image.png',
            width: 709,
            height: 708,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          id: '6uFAxyM5DEhvuytNB1iwnl',
          ...iSys,
        },
        switcherItemTitle: 'Featured Item 2',
        heading: 'Modern SaaS solutions for companies of all sizes v2',
        subheading: 'You are looking at Item 2, engage with, and realize value from software throughout their journey.',
        switcherItemList: {
          ...iAsset,
          sys: {
            id: '3Vj33uogdVa8nQ0b5l4N5D',
            ...iSys,
          },
          __typename: 'ComponentList',
          internalName: 'Dummy List - Switcher',
          listItemsCollection: {
            skip: 0,
            total: 0,
            limit: 0,
            items: [
              {
                ...iAsset,
                sys: {
                  id: '3GWzxIF3pYlvwOUOrwCcAO',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher',
                title: 'Feature 1',
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
                            value: 'This is a feature paragraph where you can talk about the feature.',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  ...iSys,
                  id: '7d5fENneXscQKLk1RXpsvp',
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 2',
                title: 'Feature 2',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '4NLXFt4oPca2lz60xfOPRy',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 3',
                title: 'Feature 3',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
            ],
          },
        },
        primaryButton: {
          ...iAsset,
          sys: {
            id: '6kHI9RjJGpewVdneXsPDQt',
            ...iSys,
          },
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
        },
        secondaryButton: {
          ...iAsset,
          sys: {
            id: '1wlknObUfFqwnXtZlJULr3',
            ...iSys,
          },
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
        },
        switcherItemImage: {
          ...iAsset,
          sys: {
            id: 'Pq80FdA46SP071Z5THGmC',
            ...iSys,
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Switcher Image',
          title: 'Dummy Switcher Item Image',
          image: {
            ...iAsset,
            sys: {
              id: '16Cx5gw5zCRng98Iip2jjg',
              ...iSys,
            },
            __typename: 'Asset',
            contentType: 'image/png',
            title: 'Dummy Switcher Image',
            description: 'Image used inside the Switcher Item Image.',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/16Cx5gw5zCRng98Iip2jjg/c4a188e774cd57dfb33096e8cd79e9de/Switcher_Image.png',
            width: 709,
            height: 708,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          id: '2dIJuZdGZgHT62v4KGYYUx',
          ...iSys,
        },
        switcherItemTitle: 'Featured Item 3',
        heading: 'Modern SaaS solutions for companies of all sizes v3',
        subheading: 'You are looking at Item 3, engage with, and realize value from software throughout their journey.',
        switcherItemList: {
          ...iAsset,
          sys: {
            id: '3Vj33uogdVa8nQ0b5l4N5D',
            ...iSys,
          },
          __typename: 'ComponentList',
          internalName: 'Dummy List - Switcher',
          listItemsCollection: {
            limit: 0,
            skip: 0,
            total: 0,
            items: [
              {
                ...iAsset,
                sys: {
                  id: '3GWzxIF3pYlvwOUOrwCcAO',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher',
                title: 'Feature 1',
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
                            value: 'This is a feature paragraph where you can talk about the feature.',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '7d5fENneXscQKLk1RXpsvp',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 2',
                title: 'Feature 2',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '4NLXFt4oPca2lz60xfOPRy',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 3',
                title: 'Feature 3',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
            ],
          },
        },
        primaryButton: {
          ...iAsset,
          sys: {
            id: '6kHI9RjJGpewVdneXsPDQt',
            ...iSys,
          },
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
        },
        secondaryButton: {
          ...iAsset,
          sys: {
            id: '1wlknObUfFqwnXtZlJULr3',
            ...iSys,
          },
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
        },
        switcherItemImage: {
          ...iAsset,
          sys: {
            id: 'Pq80FdA46SP071Z5THGmC',
            ...iSys,
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Switcher Image',
          title: 'Dummy Switcher Item Image',
          image: {
            ...iAsset,
            sys: {
              id: '16Cx5gw5zCRng98Iip2jjg',
              ...iSys,
            },
            __typename: 'Asset',
            contentType: 'image/png',
            title: 'Dummy Switcher Image',
            description: 'Image used inside the Switcher Item Image.',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/16Cx5gw5zCRng98Iip2jjg/c4a188e774cd57dfb33096e8cd79e9de/Switcher_Image.png',
            width: 709,
            height: 708,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          id: '1OoAcK9A57jc8CaxuDJqW3',
          ...iSys,
        },
        switcherItemTitle: 'Featured Item 4',
        heading: 'Modern SaaS solutions for companies of all sizes v4',
        subheading: 'You are looking at Item 4, engage with, and realize value from software throughout their journey.',
        switcherItemList: {
          ...iAsset,
          sys: {
            id: '3Vj33uogdVa8nQ0b5l4N5D',
            ...iSys,
          },
          __typename: 'ComponentList',
          internalName: 'Dummy List - Switcher',
          listItemsCollection: {
            limit: 0,
            total: 0,
            skip: 0,
            items: [
              {
                ...iAsset,
                sys: {
                  ...iSys,
                  id: '3GWzxIF3pYlvwOUOrwCcAO',
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher',
                title: 'Feature 1',
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
                            value: 'This is a feature paragraph where you can talk about the feature.',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '7d5fENneXscQKLk1RXpsvp',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 2',
                title: 'Feature 2',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '4NLXFt4oPca2lz60xfOPRy',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 3',
                title: 'Feature 3',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
            ],
          },
        },
        primaryButton: {
          ...iAsset,
          sys: {
            id: '6kHI9RjJGpewVdneXsPDQt',
            ...iSys,
          },
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
        },
        secondaryButton: {
          ...iAsset,
          sys: {
            id: '1wlknObUfFqwnXtZlJULr3',
            ...iSys,
          },
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
        },
        switcherItemImage: {
          ...iAsset,
          sys: {
            id: 'Pq80FdA46SP071Z5THGmC',
            ...iSys,
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Switcher Image',
          title: 'Dummy Switcher Item Image',
          image: {
            ...iAsset,
            sys: {
              id: '16Cx5gw5zCRng98Iip2jjg',
              ...iSys,
            },
            __typename: 'Asset',
            contentType: 'image/png',
            title: 'Dummy Switcher Image',
            description: 'Image used inside the Switcher Item Image.',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/16Cx5gw5zCRng98Iip2jjg/c4a188e774cd57dfb33096e8cd79e9de/Switcher_Image.png',
            width: 709,
            height: 708,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          id: '1jRne11yZXLavU85z5eZag',
          ...iSys,
        },
        switcherItemTitle: 'Featured Item 5',
        heading: 'Modern SaaS solutions for companies of all sizes v5',
        subheading: 'You are looking at Item 5, engage with, and realize value from software throughout their journey.',
        switcherItemList: {
          ...iAsset,
          sys: {
            id: '3Vj33uogdVa8nQ0b5l4N5D',
            ...iSys,
          },
          __typename: 'ComponentList',
          internalName: 'Dummy List - Switcher',
          listItemsCollection: {
            limit: 0,
            total: 0,
            skip: 0,
            items: [
              {
                ...iAsset,
                sys: {
                  id: '3GWzxIF3pYlvwOUOrwCcAO',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher',
                title: 'Feature 1',
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
                            value: 'This is a feature paragraph where you can talk about the feature.',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '7d5fENneXscQKLk1RXpsvp',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 2',
                title: 'Feature 2',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      block: [],
                      hyperlink: [],
                    },
                  },
                },
              },
              {
                ...iAsset,
                sys: {
                  id: '4NLXFt4oPca2lz60xfOPRy',
                  ...iSys,
                },
                __typename: 'ComponentListItem',
                internalName: 'Dummy List Item - Switcher 3',
                title: 'Feature 3',
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
                            value: 'This is a feature paragraph where you can talk about the feature',
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
                      block: [],
                      inline: [],
                    },
                    assets: {
                      hyperlink: [],
                      block: [],
                    },
                  },
                },
              },
            ],
          },
        },
        primaryButton: {
          ...iAsset,
          sys: {
            id: '6kHI9RjJGpewVdneXsPDQt',
            ...iSys,
          },
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
        },
        secondaryButton: {
          ...iAsset,
          sys: {
            id: '1wlknObUfFqwnXtZlJULr3',
            ...iSys,
          },
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
        },
        switcherItemImage: {
          ...iAsset,
          sys: {
            id: 'Pq80FdA46SP071Z5THGmC',
            ...iSys,
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Switcher Image',
          title: 'Dummy Switcher Item Image',
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '16Cx5gw5zCRng98Iip2jjg',
            },
            __typename: 'Asset',
            contentType: 'image/png',
            title: 'Dummy Switcher Image',
            description: 'Image used inside the Switcher Item Image.',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/16Cx5gw5zCRng98Iip2jjg/c4a188e774cd57dfb33096e8cd79e9de/Switcher_Image.png',
            width: 709,
            height: 708,
          },
        },
      },
    ],
  },
};

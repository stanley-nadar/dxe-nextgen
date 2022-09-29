import { ComponentStory } from '@storybook/react';

import { iAsset, iCollection, iSys } from 'assets/mockData/emptyTypes';

import Footer from 'components/Footer/Footer';

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const FooterStory = Template.bind({});
FooterStory.parameters = {
  controls: {
    include: ['footerStyle', 'menuItemsCollection'],
  },
};

export const menuItemsCollection = (count: number) => ({
  ...iCollection,
  items: [
    ...Array(count).fill({
      ...iAsset,
      sys: {
        ...iSys,
        id: '3j4fj0KLFO7iLtB3jsokfN',
      },
      __typename: 'MenuItem',
      internalName: 'Footer Products',
      label: 'Products',
      description: null,
      link: null,
      image: null,
      button: null,
      blogFormat: null,
      menuCollection: {
        ...iCollection,
        items: [
          {
            ...iAsset,
            sys: {
              ...iSys,
              id: '4FSz8Q5Jp1yEk6Le6HVf70',
            },
            __typename: 'MenuItem',
            internalName: 'Freshdesk',
            label: 'Freshdesk',
            description: null,
            link: 'https://www.freshworks.com',
            image: null,
            button: null,
            blogFormat: null,
            menuCollection: {
              ...iCollection,
              items: [],
            },
          },
          {
            ...iAsset,
            sys: {
              ...iSys,
              id: 'p6rK4oKOcbKP7hzAL2Drf',
            },
            __typename: 'MenuItem',
            internalName: 'Freshsales',
            label: 'Freshsales',
            description: null,
            link: 'https://www.freshworks.com',
            image: null,
            button: null,
            blogFormat: null,
            menuCollection: {
              ...iCollection,
              items: [],
            },
          },
          {
            ...iAsset,
            sys: {
              ...iSys,
              id: '5mSvlVXt79pf1qFjzXCdiP',
            },
            __typename: 'MenuItem',
            internalName: 'Freshmarketer',
            label: 'Freshmarketer',
            description: null,
            link: 'https://www.freshworks.com',
            image: null,
            button: null,
            blogFormat: null,
            menuCollection: {
              ...iCollection,
              items: [],
            },
          },
          {
            ...iAsset,
            sys: {
              ...iSys,
              id: '3Oe95js65y9ZPE4EvE8Oip',
            },
            __typename: 'MenuItem',
            internalName: 'Freshservice',
            label: 'Freshservice',
            description: null,
            link: 'https://www.freshworks.com',
            image: null,
            button: null,
            blogFormat: null,
            menuCollection: {
              ...iCollection,
              items: [],
            },
          },
          {
            ...iAsset,
            sys: {
              ...iSys,
              id: '3zXHbADLg2B9UYLxEV8ziF',
            },
            __typename: 'MenuItem',
            internalName: 'Freshteam',
            label: 'Freshteam',
            description: null,
            link: 'https://www.freshworks.com',
            image: null,
            button: null,
            blogFormat: null,
            menuCollection: {
              ...iCollection,
              items: [],
            },
          },
        ],
      },
    }),
  ],
});

FooterStory.args = {
  footerStyle: 'Standard',
  sys: {
    ...iSys,
    id: '1xrFKkB0Crq2SPtytBrgMA',
  },
  __typename: 'ComponentFooter',
  internalName: 'Dummy Footer',
  contactNumber: ' +1-866-832-3090',
  contactEmail: 'support@freshdesk.com',
  googlePlayUrl: 'https://www.google.com',
  appStoreUrl: 'https://www.apple.com',
  legalText: '© Freshworks Inc. All Rights Reserved',
  announcementCard: {
    ...iAsset,
    sys: {
      ...iSys,
      id: '5SgvoNJmLd57LG5jSYuQy5',
    },
    __typename: 'MenuItem',
    internalName: 'Global Jam 2022',
    label: 'Freshworks Global Jam 2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing',
    link: 'https://www.freshworks.com',
    image: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '3nuiOA47OQKYvO2tzivMws',
      },
      __typename: 'ComponentImage',
      internalName: 'Global Jam Image',
      title: 'Celebrate the global jam',
      image: {
        ...iAsset,
        sys: {
          ...iSys,
          id: '21Oq4RqqgQRBaKHamAILlS',
        },
        __typename: 'Asset',
        contentType: 'image/png',
        title: 'global jam',
        description: 'people celebrating the global jam',
        url: 'https://images.ctfassets.net/bmpbi2fhxoeu/21Oq4RqqgQRBaKHamAILlS/732d22e9f4c894f1ce15cde57f716d99/Image.png',
        width: 300,
        height: 161,
      },
    },
    button: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '4L8b4mhN7jo8p9aszbWGon',
      },
      __typename: 'ComponentButton',
      internalName: 'All Events',
      label: 'All Events',
      labelIcon: null,
      link: 'https://www.freshworks.com',
      hierarchy: 'Link Color',
      size: 'Small',
      startIcon: null,
      endIcon: '>',
      rainbowHover: false,
    },
    blogFormat: false,
    menuCollection: {
      ...iCollection,
      items: [],
    },
  },
  menuItemsCollection: menuItemsCollection(4),
  privacyTermsMenuCollection: {
    ...iCollection,
    items: [
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '2FamhtCdfxyshW8FPMpnYt',
        },
        __typename: 'MenuItem',
        internalName: 'Footer Terms',
        label: 'Terms & Conditions',
        description: null,
        link: 'https://www.freshworks.com',
        image: null,
        button: null,
        blogFormat: null,
        menuCollection: {
          ...iCollection,
          items: [],
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: 'nczrMf5nM2zTVdFArpsMU',
        },
        __typename: 'MenuItem',
        internalName: 'Footer Privacy',
        label: 'Privacy Policy',
        description: null,
        link: 'https://www.freshworks.com',
        image: null,
        button: null,
        blogFormat: null,
        menuCollection: {
          ...iCollection,
          items: [],
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '40abd3LNOrGjP0FwA5gLAs',
        },
        __typename: 'MenuItem',
        internalName: 'Footer Cookies',
        label: 'Cookie Notice',
        description: null,
        link: 'https://www.freshworks.com',
        image: null,
        button: null,
        blogFormat: null,
        menuCollection: {
          ...iCollection,
          items: [],
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '2TXbuuokzAWekXDigp2zYe',
        },
        __typename: 'MenuItem',
        internalName: 'Footer legal',
        label: 'Legal Documents',
        description: null,
        link: 'https://www.freshworks.com',
        image: null,
        button: null,
        blogFormat: null,
        menuCollection: {
          ...iCollection,
          items: [],
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '40abd3LNOrGjP0FwA5gLAs',
        },
        __typename: 'MenuItem',
        internalName: 'Footer Cookies',
        label: 'Cookie Notice',
        description: null,
        link: 'https://www.freshworks.com',
        image: null,
        button: null,
        blogFormat: null,
        menuCollection: {
          ...iCollection,
          items: [],
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '2TXbuuokzAWekXDigp2zYe',
        },
        __typename: 'MenuItem',
        internalName: 'Footer legal',
        label: 'Legal Documents',
        description: null,
        link: 'https://www.freshworks.com',
        image: null,
        button: null,
        blogFormat: null,
        menuCollection: {
          ...iCollection,
          items: [],
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: 'nczrMf5nM2zTVdFArpsMU',
        },
        __typename: 'MenuItem',
        internalName: 'Footer Privacy',
        label: 'Privacy Policy',
        description: null,
        link: 'https://www.freshworks.com',
        image: null,
        button: null,
        blogFormat: null,
        menuCollection: {
          ...iCollection,
          items: [],
        },
      },
    ],
  },
  company: {
    ...iAsset,
    sys: {
      ...iSys,
      id: '6Jsr2PFdEq2HgJ09zG2FXC',
    },
    name: 'Freshworks',
    logoLight: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '1NvnpdbP86DjdHXYzq4w7h',
      },
      __typename: 'Asset',
      contentType: 'image/svg+xml',
      title: 'Freshworks Logo Light',
      description: 'The black version of the Freshworks logo',
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/1NvnpdbP86DjdHXYzq4w7h/40ba41f7cf30ef38e7373ccdb2d34ada/freshworks-logoBlack.svg',
      width: 160,
      height: 32,
    },
    logoDark: {
      ...iAsset,
      sys: {
        ...iSys,
        id: 'b9kIyphnbZw6HGkzGDL9b',
      },
      __typename: 'Asset',
      contentType: 'image/svg+xml',
      title: 'Freshworks Logo on Dark',
      description: 'White version of the Freshworks logo',
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/b9kIyphnbZw6HGkzGDL9b/360e3380fa339dbd08183bb1bb3359d0/freshworks-logoWhite.svg',
      width: 160,
      height: 32,
    },
  },
};

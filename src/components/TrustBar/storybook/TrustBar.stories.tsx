import { ComponentStory } from '@storybook/react';
import { useWindowSize } from 'react-use';

import { iAsset, iCollection, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import TrustBar from 'components/TrustBar/TrustBar';

import { getBackground } from 'utils/functions';

const Template: ComponentStory<typeof TrustBar> = args => {
  const { background, __typename } = args;
  const { width } = useWindowSize();

  const { backgroundGradient, backgroundIsDark } = getBackground(__typename, background, width);

  return (
    <Section id="trustBar" backgroundGradient={backgroundGradient}>
      <TrustBar {...args} backgroundIsDark={backgroundIsDark} />
    </Section>
  );
};

export const TrustBarStory = Template.bind({});
TrustBarStory.parameters = {
  controls: {
    include: ['heading', 'variant', 'background'],
  },
};
TrustBarStory.args = {
  sys: {
    ...iSys,
    id: '1MXVjBIJdxEMbRF0ZGeLQo',
  },
  __typename: 'ComponentTrustBar',
  internalName: 'Dummy Scrolling Trust Bar',
  background: 'Dark Gradient',
  variant: 'scrolling',
  heading: 'Trusted by 50K+ customers big and small',
  companyCollection: {
    ...iCollection,
    items: [
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: 'OzVlR2wUOzdLXRrk2g3xq',
        },
        name: 'Vice',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '3rOJWtjipNBUjYhJEkJFmt',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Vice Light Logo',
          title: 'Vice Light Logo',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '4bydJfoTFjEFVpkydBUbDj',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Vice Logo Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/4bydJfoTFjEFVpkydBUbDj/e050ef9a9371dbda46618669dcedfec3/Vice-logo.svg',
            width: 93,
            height: 25,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '1y0yLa9rGQvi5aWkTaunR1',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Vice Dark Logo',
          title: 'Vice Dark Logo',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '6HtMTeYLxNgFPTBZxhTDQz',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Vice Logo White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/6HtMTeYLxNgFPTBZxhTDQz/c8cca85c76dc4a417571a9d71d4b9ce3/Vice-logo-1.svg',
            width: 93,
            height: 25,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '87SUc24bEnlwsTAFa0ZLP',
        },
        name: 'Trainline',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '40paTBbph6mIIW14q1ADnS',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Component Image - Trainline Logo Light',
          title: 'Trainline Logo Light',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '47Ti2IHm7f6FgqNFkuva5F',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Trainline Logo Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/47Ti2IHm7f6FgqNFkuva5F/b85fedfc0c732932b0011c357161f827/Trainline-logo.svg',
            width: 180,
            height: 30,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: 'jqmFVLUHTwE8kFiPafYrb',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Component Image: Dark Logo Trainline',
          title: 'Dark Logo Trainline',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '41VQekfwAaphPJOgKi4SQT',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Trainline Logo White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/41VQekfwAaphPJOgKi4SQT/8107e61a0f007f19d78d5d26dac6d739/Trainline-logo-1.svg',
            width: 180,
            height: 30,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '6esSPEaX3RuBmkSTPDcanD',
        },
        name: 'Pearson',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: 'I06yfPsawb0rtCsBJLzRf',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Pearson Logo Light',
          title: 'Pearson Logo Light',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,

              id: '2Y84JR3bTJzMynMS1X6VPV',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Pearson Logo Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/2Y84JR3bTJzMynMS1X6VPV/93bca85361fd6f41b8e622f35b7b75d6/Pearson-Logo.svg',
            width: 117,
            height: 35,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: 'CXZITs78LqKHH7VR1cBbO',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Pearson Logo Dark',
          title: 'Pearson Logo Dark',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '58sWqUh10NljLmbvsLGnp4',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Pearson Logo White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/58sWqUh10NljLmbvsLGnp4/0297f79f93a6236db9ab64b4b9ea8a1d/Pearson-Logo-1.svg',
            width: 117,
            height: 35,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '2xnznFuFNgIBw4Gdd1punz',
        },
        name: 'Klarna',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '7LViZLKmg53PapkafatyJy',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Klarna Logo Light',
          title: 'Klarna Light Logo',
          bynderImage: null,
          image: {
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
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '6vPhqLPYwZZePLzOgcSZsD',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Component - Klarna Logo Dark',
          title: 'Klarna Dark',
          bynderImage: null,
          image: {
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
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '1HIwJpjliZdl6LS6RbxlPs',
        },
        name: 'ITV',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '2BqK0rQRFDFTIr34XkXSbw',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - ITV Logo Light',
          title: 'ITV Light Logo',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '6ALrBksRnDEHneuqc3zGGN',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'ITV Logo Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/6ALrBksRnDEHneuqc3zGGN/7143cb6f1396dee840461cc43c7b1239/ITV-logo.svg',
            width: 61,
            height: 30,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '3N1DIBGaiO1deHA0vDEEwL',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - ITV Dark Logo',
          title: 'ITV Dark Logo',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '3D2NZh7ULynYHZyOcQrfQW',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'ITV Logo White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/3D2NZh7ULynYHZyOcQrfQW/4aebcbcb4fb637fe6db882c606c8ec51/ITV-logo-1.svg',
            width: 61,
            height: 30,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '7oK0s4s9MpngXp27KC6Ea7',
        },
        name: 'Fiverr',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '3apDOaDFaB6eLjbQIGWjDG',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Fiverr Logo Light',
          title: 'Fiverr Logo Light',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '6rLcXzGt9A7lfYUGThOqLO',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Fiverr Logo Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/6rLcXzGt9A7lfYUGThOqLO/4d8f50e959a64706a53490ed9df5abe0/Fiverr-logo.svg',
            width: 99,
            height: 30,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '2T8gjLx7oIKO8YrNxYfIsb',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image- Fiverr Logo Dark',
          title: 'Dummy Image- Fiverr Logo Dark',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '8f63bzkRzGUAxQ2Lozgw7',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Fiverr Logo White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/8f63bzkRzGUAxQ2Lozgw7/d0655073cc976a723742eaee5fd82496/Fiverr-logo-1.svg',
            width: 99,
            height: 30,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '6feRS68fGPsjdctZIITlfV',
        },
        name: 'Exabytes',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: 'kljMC04syBgZx9jBC2E0W',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Exabytes Light Logo',
          title: null,
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '6CZDL1NYSc9jRUKxtV3HSw',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Exabytes Logo Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/6CZDL1NYSc9jRUKxtV3HSw/0f9c9f3e4557ae63be0330df69f65f36/Exabytes.svg',
            width: 146,
            height: 35,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '2JtauwAaonScHmebN8TLO',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Exabytes Dark Logo',
          title: 'Exabytes Dark Logo',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '36qwP7Xc32l57x3S2pekwD',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Exabytes Logo White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/36qwP7Xc32l57x3S2pekwD/f7e6c88975c0248ecf8099f5cc63f550/Exabytes-1.svg',
            width: 146,
            height: 35,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '3mXhGzCSMoMWhKQIhWYNDu',
        },
        name: 'Bridgestone',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '2bzpOl2a2n8ieZxqwfCTxe',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image Company - Bridgestone Logo Light',
          title: null,
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '1a282UKEYvzzc7UBGvPwVe',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Bridgestone Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/1a282UKEYvzzc7UBGvPwVe/5e3c41dc93f70b5981518cb6bcc280d2/Bridgestone-logo.svg',
            width: 204,
            height: 25,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '2u0IUE9Y0Zhq2t6oQ9Ud7H',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image Company - Bridgestone Logo Dark',
          title: 'Bridgestone Logo Dark',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '6GLOLNxc4Xh0vyy8RRRu04',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Bridgestone White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/6GLOLNxc4Xh0vyy8RRRu04/4d65fdf63f234bdaf845e09afaf9ab19/Bridgestone-logo-1.svg',
            width: 204,
            height: 25,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: 'OzVlR2wUOzdLXRrk2g3xq',
        },
        name: 'Vice',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '3rOJWtjipNBUjYhJEkJFmt',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Vice Light Logo',
          title: 'Vice Light Logo',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '4bydJfoTFjEFVpkydBUbDj',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Vice Logo Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/4bydJfoTFjEFVpkydBUbDj/e050ef9a9371dbda46618669dcedfec3/Vice-logo.svg',
            width: 93,
            height: 25,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '1y0yLa9rGQvi5aWkTaunR1',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Image - Vice Dark Logo',
          title: 'Vice Dark Logo',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '6HtMTeYLxNgFPTBZxhTDQz',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Vice Logo White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/6HtMTeYLxNgFPTBZxhTDQz/c8cca85c76dc4a417571a9d71d4b9ce3/Vice-logo-1.svg',
            width: 93,
            height: 25,
          },
        },
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '87SUc24bEnlwsTAFa0ZLP',
        },
        name: 'Trainline',
        companyLogoLight: {
          ...iAsset,
          sys: {
            ...iSys,
            id: '40paTBbph6mIIW14q1ADnS',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Component Image - Trainline Logo Light',
          title: 'Trainline Logo Light',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '47Ti2IHm7f6FgqNFkuva5F',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Trainline Logo Grey',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/47Ti2IHm7f6FgqNFkuva5F/b85fedfc0c732932b0011c357161f827/Trainline-logo.svg',
            width: 180,
            height: 30,
          },
        },
        companyLogoDark: {
          ...iAsset,
          sys: {
            ...iSys,
            id: 'jqmFVLUHTwE8kFiPafYrb',
          },
          __typename: 'ComponentImage',
          internalName: 'Dummy Component Image: Dark Logo Trainline',
          title: 'Dark Logo Trainline',
          bynderImage: null,
          image: {
            ...iAsset,
            sys: {
              ...iSys,
              id: '41VQekfwAaphPJOgKi4SQT',
            },
            __typename: 'Asset',
            contentType: 'image/svg+xml',
            title: 'Trainline Logo White',
            description: '',
            url: 'https://images.ctfassets.net/bmpbi2fhxoeu/41VQekfwAaphPJOgKi4SQT/8107e61a0f007f19d78d5d26dac6d739/Trainline-logo-1.svg',
            width: 180,
            height: 30,
          },
        },
      },
    ],
  },
};

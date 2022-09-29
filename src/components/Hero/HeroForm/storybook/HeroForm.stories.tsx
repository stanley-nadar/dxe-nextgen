import { ComponentStory } from '@storybook/react';
import { useWindowSize } from 'react-use';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentHeroForm from 'components/Hero/HeroForm/HeroForm';

const Template: ComponentStory<typeof ComponentHeroForm> = args => {
  const { width } = useWindowSize();

  return (
    <Section id="hero-form">
      <ComponentHeroForm {...args} screenWidth={width} />
    </Section>
  );
};

export const componentHeroForm = Template.bind({});
componentHeroForm.parameters = {
  controls: {
    include: ['eyebrow', 'contentBackground', 'heading', 'subheading'],
  },
};

componentHeroForm.args = {
  sys: {
    ...iSys,
    id: '4COv8fx3ecaK3mRTyjMF5g',
  },
  __typename: 'ComponentHeroForm',
  internalName: 'Dummy Hero Form',
  eyebrow: 'Lorem Ipsum',
  heading: 'Try Freshdesk Support Desk free',
  subheading: 'No credit card required. No strings attached',
  contentBackground: 'Light Blue-50',
  heroFeatureList: {
    ...iAsset,
    sys: {
      ...iSys,
      id: 'yfZ5ZUpb9zwnLUPAkh7HQ',
    },
    __typename: 'ComponentList',
    internalName: 'Dummy List - Hero Signup Form',
    listItemsCollection: {
      limit: 0,
      skip: 0,
      total: 0,
      items: [
        {
          ...iAsset,
          sys: {
            ...iSys,
            id: '2rNLergT0aXylgfIJfQPt5',
          },
          __typename: 'ComponentListItem',
          internalName: 'Dummy List Item - Hero Form 1',
          title: '75% reduction in ticket resolution time',
          symbol: 'check',
          body: null,
        },
        {
          ...iAsset,
          sys: {
            ...iSys,
            id: '7yqgUaw0Umz1D2zpSS5w9A',
          },
          __typename: 'ComponentListItem',
          internalName: 'Dummy List Item - Hero Form 2',
          title: '3 month payback period',
          symbol: 'check',
          body: null,
        },
        {
          ...iAsset,
          sys: {
            ...iSys,
            id: 'oRPh0rWFz0YpQcLvoMPN3',
          },
          __typename: 'ComponentListItem',
          internalName: 'Dummy List Item - Hero Form 3',
          title: '54 hours per agent per year saved with automations',
          symbol: 'check',
          body: null,
        },
      ],
    },
  },
  mediaReference: {
    ...iAsset,
    sys: {
      ...iSys,
      id: '585vRliNbhJs1Txx2aPPEN',
    },
    __typename: 'ComponentImage',
    internalName: 'Component Image: Dummy Hero Sign Up Variant',
    title: 'For usage inside of the Dummy Hero Sign Up Form',
    image: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '2rk5sNrO3yR4m6O2Yvndl',
      },
      __typename: 'Asset',
      contentType: 'image/webp',
      title: 'Hero Signup Image',
      description: null,
      url: 'https://images.ctfassets.net/bmpbi2fhxoeu/2rk5sNrO3yR4m6O2Yvndl/b5f420236103ee56f47b023d22533c60/Hero_Image_Forms.webp',
      width: 770,
      height: 768,
    },
  },
  form: {
    ...iAsset,
    sys: {
      ...iSys,
      id: '2Gqr8JqoH5QORegdmp1nCT',
    },
    __typename: 'ComponentSignUpForm',
    internalName: 'Dummy Sign Up Form',
    heading: 'Sign up for a 21 day free trial',
    termsOfService: 'https://www.freshworks.com/',
    privacyNotice: 'https://www.freshworks.com/',
    dataCenterList: ['United States', 'India', 'Europe', 'Australia'],
    pageRedirection: '/dummy-3',
    firstName: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '1uMCfbfeAgcmtTCG8FlABU',
      },
      __typename: 'FormInputField',
      internalName: 'Dummy Sign Up Form - First Name',
      type: 'Text',
      label: 'First Name',
      placeholder: null,
      helperText: null,
      startIcon: null,
      endIcon: null,
      toolTipTitle: null,
      disabled: true,
      toolTipDescription: null,
      identification: null,
      valueOfField: null,
    },
    lastName: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '7H2OlqCzsm1MdoEuixUgqe',
      },
      __typename: 'FormInputField',
      internalName: 'Dummy Sign Up Form - Last Name',
      type: 'Text',
      label: 'Last Name',
      placeholder: null,
      helperText: null,
      startIcon: null,
      endIcon: null,
      toolTipTitle: null,
      disabled: true,
      toolTipDescription: null,
      identification: null,
      valueOfField: null,
    },
    company: {
      ...iAsset,
      sys: {
        ...iSys,
        id: 'J0f6gtcJsuyLjbduOPgHk',
      },
      __typename: 'FormInputField',
      internalName: 'Dummy Sign Up Form - Company',
      type: 'Text',
      label: 'Company',
      placeholder: null,
      helperText: null,
      startIcon: null,
      endIcon: null,
      toolTipTitle: null,
      disabled: true,
      toolTipDescription: null,
      identification: null,
      valueOfField: null,
    },
    phoneNumber: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '2vZ4Q4EoeC5rN7xWwVGj0T',
      },
      __typename: 'FormInputField',
      internalName: 'Dummy Sign Up Form - Phone No.',
      type: 'Phone',
      label: 'Phone No.',
      placeholder: null,
      helperText: null,
      startIcon: null,
      endIcon: null,
      toolTipTitle: null,
      disabled: true,
      toolTipDescription: null,
      identification: null,
      valueOfField: null,
    },
    email: {
      ...iAsset,
      sys: {
        ...iSys,
        id: '3dbAMl5VRz8EZfKTpnWc0',
      },
      __typename: 'FormInputField',
      internalName: 'Dummy Sign Up Form - Email',
      type: 'Email',
      label: 'Email',
      placeholder: null,
      helperText: null,
      startIcon: null,
      endIcon: null,
      toolTipTitle: null,
      disabled: true,
      toolTipDescription: null,
      identification: null,
      valueOfField: null,
    },
    hiddenFormsCollection: {
      limit: 0,
      skip: 0,
      total: 0,
      items: [
        {
          ...iAsset,
          sys: {
            ...iSys,
            id: '78m0ZKDRwnlTwSBL4MlSDa',
          },
          __typename: 'FormInputField',
          internalName: 'Dummy Sign Up Form - Hidden - Cloud Type',
          type: 'Text',
          label: null,
          placeholder: null,
          helperText: null,
          startIcon: null,
          endIcon: null,
          toolTipTitle: null,
          disabled: true,
          toolTipDescription: null,
          identification: 'cloud_type',
          valueOfField: 'freshdesk_messaging_cloud',
        },
      ],
    },
  },
};

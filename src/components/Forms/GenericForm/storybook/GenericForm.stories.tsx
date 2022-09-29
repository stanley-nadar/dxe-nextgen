import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import GenericForm from 'components/Forms/GenericForm/GenericForm';

const Template: ComponentStory<typeof GenericForm> = args => (
  <Section id="Generic Form">
    <GenericForm {...args} />
  </Section>
);

export const componentGenericForm = Template.bind({});
componentGenericForm.parameters = {
  controls: {
    include: ['heading', 'subheading', 'bodyTextLabel'],
  },
};

componentGenericForm.args = {
  heading: 'Get in touch with us',
  subheading: 'This is an optional subheading',
  bodyTextLabel: undefined,
  termsOfServicePage: 'https://www.freshworks.com/',
  dataCenterList: [
    'United States',
    'India',
    'Europe',
    'Austrailia',
    'United Kingdom',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
  ],
  callToAction: {
    sys: {
      ...iSys,
      id: '6kHI9RjJGpewVdneXsPDQt',
    },
    ...iAsset,
    __typename: 'ComponentButton',
    internalName: 'Dummy Button Primary',
    label: 'Submit',
    labelIcon: null,
    link: '',
    hierarchy: 'Primary Color',
    size: 'XLarge',
    startIcon: null,
    endIcon: null,
    rainbowHover: null,
  },
  formsCollection: {
    limit: 0,
    skip: 0,
    total: 0,
    items: [
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '1uMCfbfeAgcmtTCG8FlABU',
        },
        __typename: 'FormInputField',
        internalName: 'Dummy Generic Form - First Name',
        type: 'Text',
        label: 'First Name',
        placeholder: null,
        helperText: null,
        startIcon: null,
        endIcon: null,
        toolTipTitle: null,
        disabled: false,
        toolTipDescription: null,
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '1uMCcmtTCG8FlABU',
        },
        __typename: 'FormInputField',
        internalName: 'Dummy Generic Form - Last Name',
        type: 'Text',
        label: 'Last Name',
        placeholder: null,
        helperText: null,
        startIcon: null,
        endIcon: null,
        toolTipTitle: null,
        disabled: false,
        toolTipDescription: null,
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '1uMCcmtTCG8FlABU',
        },
        __typename: 'FormInputField',
        internalName: 'Dummy Generic Form - Email',
        type: 'Email',
        label: 'Email',
        placeholder: null,
        helperText: null,
        startIcon: null,
        endIcon: null,
        toolTipTitle: null,
        disabled: false,
        toolTipDescription: null,
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '1uMCcmtTCG8FlABU',
        },
        __typename: 'FormInputField',
        internalName: 'Dummy Generic Form - Phone Number',
        type: 'Phone',
        label: 'Phone Number',
        placeholder: null,
        helperText: null,
        startIcon: null,
        endIcon: null,
        toolTipTitle: null,
        disabled: false,
        toolTipDescription: null,
      },
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '1uMCfbfeAgcmtTCG8FlABU',
        },
        __typename: 'FormDropdownField',
        internalName: 'Dropdown Field',
        label: 'Foo',
        placeholder: 'Placeholder',
        options: ['Option 1', 'Option 2', 'Option 3'],
      },
    ],
  },
  hiddenFormsCollection: {
    limit: 0,
    skip: 0,
    total: 1,
    items: [
      {
        ...iAsset,
        sys: {
          ...iSys,
          id: '78m0ZKDRwnlTwSBL4MlSDa',
        },
        type: 'Text',
        label: null,
        placeholder: null,
        helperText: null,
        startIcon: null,
        endIcon: null,
        toolTipTitle: null,
        disabled: true,
        toolTipDescription: null,
        hiddenField: true,
        identification: 'cloud_type',
        valueOfField: 'freshdesk_messaging_cloud',
      },
    ],
  },
};

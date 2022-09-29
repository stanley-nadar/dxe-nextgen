import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import SignUpForm from 'components/Forms/SignUpForm/SignUpForm';

const Template: ComponentStory<typeof SignUpForm> = args => (
  <Section id="SignUp Form">
    <SignUpForm {...args} />
  </Section>
);

export const componentSignUpForm = Template.bind({});
componentSignUpForm.parameters = {
  controls: {
    include: ['heading', 'subheading'],
  },
};

componentSignUpForm.args = {
  heading: 'Get in touch with us',
  termsOfService: 'https://www.freshworks.com/',
  privacyNotice: 'https://www.freshworks.com/',
  pageRedirection: 'https://www.freshworks.com/',
  dataCenterList: ['United States', 'India', 'Europe', 'Australia'],
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
};

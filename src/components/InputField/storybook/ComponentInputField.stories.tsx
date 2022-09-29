import { ComponentStory } from '@storybook/react';

import { iAsset, iSys } from 'assets/mockData/emptyTypes';

import Section from 'molecules/Section/Section';

import ComponentInputField from 'components/InputField/ComponentInputField';

const Template: ComponentStory<typeof ComponentInputField> = args => (
  <Section id="Input Field">
    <ComponentInputField {...args} />
  </Section>
);

export const componentInputField = Template.bind({});

componentInputField.parameters = {
  controls: {
    include: ['inputField'],
  },
};

componentInputField.args = {
  __typename: 'ComponentInputField',
  inputField: {
    ...iSys,
    ...iAsset,
    sys: {
      id: '',
      environmentId: '',
      spaceId: '',
    },
    type: 'email',
    label: '',
    placeholder: 'freshwork@freshworks.com',
    helperText: '',
    startIcon: 'Email',
    endIcon: 'Help',
    toolTipTitle: 'Sample Tool Tip',
    disabled: false,
    toolTipDescription: 'This is a sample tool tip description.',
    hiddenField: false,
  },
  submitButton: {
    ...iAsset,
    sys: {
      id: 'mvj743282',
      ...iSys,
    },
    __typename: 'ComponentButton',
    internalName: 'Dummy Button Heading Primary',
    label: 'Start Free Trial',
    labelIcon: null,
    link: 'http://freshworks.com/',
    hierarchy: 'Primary Color',
    size: 'XLarge',
    startIcon: null,
    endIcon: null,
  },
};

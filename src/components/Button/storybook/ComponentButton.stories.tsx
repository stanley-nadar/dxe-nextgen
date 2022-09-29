import { ComponentStory } from '@storybook/react';

import Container from 'quarks/Container';

import ComponentButton from 'components/Button/ComponentButton';

const Template: ComponentStory<typeof ComponentButton> = args => (
  <Container paddingAll={16}>
    <ComponentButton {...args} />
  </Container>
);

export const componentButton = Template.bind({});
componentButton.parameters = {
  controls: {
    include: ['label', 'labelIcon', 'link', 'disabled', 'hierarchy', 'startIcon', 'endIcon', 'size'],
  },
};

componentButton.args = {
  __typename: 'ComponentButton',
  internalName: 'Dummy Button Heading Primary',
  label: 'Start Free Trial',
  labelIcon: null,
  link: 'http://freshworks.com/',
  hierarchy: 'Primary Color',
  size: 'large',
  startIcon: null,
  endIcon: null,
  disabled: false,
};

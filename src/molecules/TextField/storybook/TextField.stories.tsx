import { ComponentStory } from '@storybook/react';

import TextField from 'molecules/TextField/TextField';

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const textField = Template.bind({});
textField.parameters = {
  controls: {
    include: [
      'label',
      'endIcon',
      'helperText',
      'startIcon',
      'placeholder',
      'tooltipPlacement',
      'tooltipDescription',
      'type',
      'name',
      'disabled',
      'error',
      'required',
      'onEndIconClick',
      'id',
      'tooltip',
      'onChange',
      'value',
    ],
  },
};
textField.args = {
  type: 'email',
  label: 'Label',
  placeholder: 'Gr8Dev@freshworks.com',
  helperText: 'This is a hint to help the user',
  disabled: false,
  error: false,
  required: false,
  tooltip: '',
  tooltipDescription: '',
  name: '',
  id: '',
};

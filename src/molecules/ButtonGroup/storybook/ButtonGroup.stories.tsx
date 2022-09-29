import { ComponentStory } from '@storybook/react';
import { ArrowLeft, ArrowRight, Circle, Plus } from 'react-feather';

import Button from 'molecules/Button/Button';
import ButtonGroup from 'molecules/ButtonGroup/ButtonGroup';

const Template: ComponentStory<typeof ButtonGroup> = args => <ButtonGroup {...args}></ButtonGroup>;

export const leadingIcon = Template.bind({});
leadingIcon.parameters = {
  controls: {
    include: ['disabled', 'fullWidth', 'variant', 'orientation'],
  },
};
leadingIcon.args = {
  children: (
    <>
      <Button startIcon={<Circle />} width="100%">
        Leading
      </Button>
      <Button startIcon={<Circle />} width="100%">
        Middle
      </Button>
      <Button startIcon={<Circle />} width="100%">
        Trailing
      </Button>
    </>
  ),
  disabled: false,
  fullWidth: false,
  variant: 'outlined',
  orientation: 'horizontal',
};

export const noIcon = Template.bind({});
noIcon.parameters = {
  controls: {
    include: ['disabled', 'fullWidth', 'variant', 'orientation'],
  },
};
noIcon.args = {
  children: (
    <>
      <Button width="100%">Leading</Button>
      <Button width="100%">Middle</Button>
      <Button width="100%">Trailing</Button>
    </>
  ),
  disabled: false,
  fullWidth: false,
  variant: 'outlined',
  orientation: 'horizontal',
};

export const iconOnly = Template.bind({});
iconOnly.parameters = {
  controls: {
    include: ['disabled', 'fullWidth', 'variant', 'orientation'],
  },
};
iconOnly.args = {
  children: (
    <>
      <Button paddingX={12} width="100%">
        <ArrowLeft size="20" />
      </Button>
      <Button paddingX={12} width="100%">
        <Plus size="20" />
      </Button>
      <Button paddingX={12} width="100%">
        <ArrowRight size="20" />
      </Button>
    </>
  ),
  disabled: false,
  fullWidth: false,
  variant: 'outlined',
  orientation: 'horizontal',
};

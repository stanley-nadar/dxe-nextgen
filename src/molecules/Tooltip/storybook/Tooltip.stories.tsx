import { ComponentStory } from '@storybook/react';
import { HelpCircle } from 'react-feather';

import Container from 'quarks/Container';

import Tooltip from 'molecules/Tooltip/Tooltip';

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />;

export const tooltip = Template.bind({});
tooltip.parameters = {
  controls: {
    include: [
      'title',
      'arrow',
      'description',
      'disableFocusListener',
      'disableHoverListener',
      'disableInteractive',
      'disableTouchListener',
      'followCursor',
      'enterDelay',
      'enterTouchDelay',
      'placement',
      'onOpen',
      'onClose',
    ],
  },
};
tooltip.args = {
  title: 'This is a tooltip',
  placement: 'bottom',
  description: '',
  arrow: true,
  disableFocusListener: false,
  disableHoverListener: false,
  disableInteractive: false,
  disableTouchListener: false,
  followCursor: false,
  enterDelay: 100,
  enterTouchDelay: 700,
  children: (
    <Container marginY={96} marginLeft={256} display="inline-block">
      <HelpCircle />
    </Container>
  ),
};

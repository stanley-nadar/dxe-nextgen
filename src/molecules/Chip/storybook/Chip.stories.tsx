import { ComponentStory } from '@storybook/react';

import Chip from 'molecules/Chip/Chip';

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />;

export const ChipStory = Template.bind({});
ChipStory.parameters = {
  controls: {
    include: ['label', 'color'],
  },
};
ChipStory.args = {
  label: 'label',
  color: 'turqoise',
};

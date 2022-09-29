import { ComponentStory } from '@storybook/react';

import IconButton from 'molecules/IconButton/IconButton';
import Section from 'molecules/Section/Section';

const Template: ComponentStory<typeof IconButton> = args => (
  <Section id="iconButton">
    <IconButton {...args} />
  </Section>
);

export const IconButtonStory = Template.bind({});
IconButtonStory.parameters = {
  controls: {
    include: ['children', 'onKeyDown', 'onClick'],
  },
};
IconButtonStory.args = { children: 'Plus' };

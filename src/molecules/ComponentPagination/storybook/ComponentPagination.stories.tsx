import { ComponentStory } from '@storybook/react';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';
import Section from 'molecules/Section/Section';

const Template: ComponentStory<typeof ComponentPagination> = args => (
  <Section id="ComponentPagination">
    <ComponentPagination {...args} />
  </Section>
);

export const ComponentPaginationStory = Template.bind({});
ComponentPaginationStory.parameters = {
  controls: {
    include: [
      'isWithArrow',
      'variant',
      'activeDot',
      'dotsCount',
      'onSetActiveDot',
      'onLeftArrowClick',
      'onRightArrowClick',
    ],
  },
};
ComponentPaginationStory.args = {
  isWithArrow: true,
  variant: 'light',
  activeDot: 1,
  dotsCount: 3,
};

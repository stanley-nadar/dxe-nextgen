import { ComponentStory } from '@storybook/react';

import { iAsset, iCollection, iSys } from 'assets/mockData/emptyTypes';

import UnorderedList from 'components/UnorderedList/UnorderedList';

const Template: ComponentStory<typeof UnorderedList> = args => <UnorderedList {...args} />;

const itemData = Array(3).fill({
  ...iAsset,
  sys: {
    ...iSys,
    id: '4rqFeJO9DaaUqBqTLCdx2i',
  },
  __typename: 'ComponentListItem',
  internalName: 'Dummy List Item',
  title: 'This is the title',
  body: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'This is the body text. It is longer than the title ',
              marks: [],
              data: {},
            },
            {
              nodeType: 'text',
              value: 'and',
              marks: [
                {
                  type: 'bold',
                },
              ],
              data: {},
            },
            {
              nodeType: 'text',
              value: ' is made of ',
              marks: [],
              data: {},
            },
            {
              nodeType: 'text',
              value: 'rich text',
              marks: [
                {
                  type: 'italic',
                },
              ],
              data: {},
            },
            {
              nodeType: 'text',
              value: '. ',
              marks: [],
              data: {},
            },
          ],
        },
      ],
    },
    links: {
      entries: {
        hyperlink: [],
        inline: [],
        block: [],
      },
      assets: {
        hyperlink: [],
        block: [],
      },
    },
  },
});

export const UnorderedListStory = Template.bind({});
UnorderedListStory.parameters = {
  controls: {
    include: [],
  },
};

UnorderedListStory.args = {
  __typename: 'ComponentList',
  internalName: 'Dummy List',
  listItemsCollection: {
    ...iCollection,
    items: itemData,
  },
};

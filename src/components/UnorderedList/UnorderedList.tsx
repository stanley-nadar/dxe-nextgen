import Icon, { iconIds } from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import { FlexProps } from 'quarks/interpolations/flex';

import { stringToKebabCase } from 'utils/functions';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentList } from 'graphql/types';
import type { FC } from 'react';

type UnorderedListProps = FlexProps & Omit<IComponentList, 'sys' | 'contentfulMetadata'>;

const UnorderedList: FC<UnorderedListProps> = ({ listItemsCollection, ...props }) => {
  const listItems = listItemsCollection?.items;

  return listItems ? (
    <Flex as="ul" flexDirection="column" gap="24px" paddingLeft={16} {...props}>
      {listItems?.map(listItem => (
        <Flex
          as="li"
          key={listItem?.sys?.id}
          gap="10px"
          css={`
            svg {
              margin-top: 5px;
            }
          `}
        >
          {listItem?.symbol && <Icon id={stringToKebabCase(listItem?.symbol as iconIds) as iconIds} size={16} />}
          <Flex flexDirection="column">
            {listItem?.title && <Text fontWeight="medium">{listItem?.title}</Text>}
            {listItem?.body && (
              <Text as="div" textStyle="md" textColor="gray-500">
                {richTextParser(listItem?.body as RichText, false)}
              </Text>
            )}
          </Flex>
        </Flex>
      ))}
    </Flex>
  ) : null;
};

export default UnorderedList;

import { FC } from 'react';
import { Minus, Plus } from 'react-feather';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentListItem } from 'graphql/types';

interface AccordionItemIndex extends Omit<IComponentListItem, 'sys' | 'contentfulMetadata'> {
  isOpen: boolean;
  twoColumn: boolean;
  onClick: () => void;
}

const AccordionItem: FC<AccordionItemIndex> = ({ isOpen, onClick, twoColumn, title, body }) => (
  <Flex
    flexDirection="column"
    paddingAll={24}
    onClick={onClick}
    onKeyPress={onClick}
    cursor="pointer"
    tabIndex={0}
    lg={{ width: twoColumn ? '370px' : '770px' }}
    xl={{ width: twoColumn ? '510px' : '770px' }}
    xxl={{ width: twoColumn ? '570px' : '770px' }}
    xxxl={{ width: twoColumn ? '708px' : '952px' }}
    hover={{
      backgroundColor: 'gray-25',
    }}
    focus={{
      backgroundColor: 'gray-25',
    }}
  >
    <Flex gap="8px" alignItems="center" justifyContent="space-between">
      {title && (
        <Text textStyle="xl" fontWeight="bold">
          {title}
        </Text>
      )}
      {isOpen ? <Minus /> : <Plus />}
    </Flex>
    {body && (
      <Text
        as="div"
        textStyle="md"
        textColor="gray-600"
        marginTop={isOpen ? 8 : 0}
        maxHeight={isOpen ? '500px' : '0px'}
        overflowY="hidden"
        transition="max-height 0.2s ease, margin 0.2s ease"
      >
        {richTextParser(body as RichText)}
      </Text>
    )}
  </Flex>
);

export default AccordionItem;

import { FC, useState } from 'react';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import AccordionItem from 'components/Accordion/AccordionItem';

import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentAccordion } from 'graphql/types';

type AccordionProps = BasicProps & IComponentAccordion;

const ComponentAccordion: FC<AccordionProps> = ({ accordionItemsCollection, eyebrow, heading, body, variant }) => {
  const isCenter = variant?.includes('Center') || false;
  const isTwoColumn = variant?.includes('Double') || false;
  const isLeftHeadSingle = variant === 'Left Heading Single';
  const accordionItems = accordionItemsCollection?.items;
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const desktopLeftMinWidth = isLeftHeadSingle ? '470px' : '573px';
  const largeDesktopLeftMinWidth = isLeftHeadSingle ? '586px' : '708px';

  const handleQuestion = (questionIndex: number) => {
    if (openQuestion === questionIndex) {
      return setOpenQuestion(null);
    }
    setOpenQuestion(questionIndex);
  };

  return (
    <Flex
      flexDirection="column"
      paddingY={48}
      alignItems={isCenter ? 'center' : 'inherit'}
      gap="32px"
      xl={{ flexDirection: isLeftHeadSingle ? 'row' : 'column' }}
    >
      <Flex
        flexDirection="column"
        gap="16px"
        alignSelf={isCenter ? 'center' : 'inherit'}
        textAlign={isCenter ? 'center' : 'inherit'}
        xl={{
          maxWidth: isCenter ? '770px' : desktopLeftMinWidth,
          minWidth: isLeftHeadSingle ? '390px' : '500px',
        }}
        xxxl={{ maxWidth: isCenter ? '952px' : largeDesktopLeftMinWidth }}
      >
        {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
        {heading && (
          <Heading as="h2" textStyle="md" fontWeight="bold" md={{ textStyle: 'lg' }}>
            {heading}
          </Heading>
        )}
        {body && (
          <Flex
            flexDirection="column"
            gap="32px"
            fontSize={18}
            alignItems={isCenter ? 'center' : 'baseline'}
            md={{ fontSize: 20 }}
          >
            {richTextParser(body as RichText, false)}
          </Flex>
        )}
      </Flex>
      <Flex
        flexDirection="column"
        gap="16px"
        width="-webkit-fill-available"
        justifyContent={variant === 'Left Heading Double' ? 'flex-start' : 'center'}
        lg={{
          flexDirection: isTwoColumn ? 'row' : 'column',
          flexWrap: 'wrap',
          alignItems: isCenter ? 'center' : 'flex-start',
        }}
      >
        {accordionItems?.map((accordionItem, index) => (
          <AccordionItem
            key={accordionItem?.sys?.id}
            isOpen={index === openQuestion}
            onClick={() => handleQuestion(index)}
            twoColumn={isTwoColumn}
            {...accordionItem}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ComponentAccordion;

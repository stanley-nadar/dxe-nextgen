import { FC, useEffect, useState } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';

import ComponentBasicCard from 'components/Cards/BasicCard/BasicCard';

import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentCardDeck } from 'graphql/types';

type CardDeckProps = BasicProps & IComponentCardDeck;

const ComponentCardDeck: FC<CardDeckProps> = ({
  headingComponent,
  headingDirection,
  centerHeadingContent,
  cardsCollection,
}) => {
  const [activeIndex, setActive] = useState(0);
  const [cardWidths, setCardWidths] = useState<number[]>([]);

  const cards = cardsCollection?.items;
  const isRowDirection = headingDirection === 'Row';
  const centerHeadingVertically = isRowDirection && centerHeadingContent;

  if (!cards) {
    throw new Error('Cards are required for Card Deck');
  }

  const gapBetweenCards = 30;
  const gapBetweenCardsXLDesktop = 24;

  const handleArrowClick = (direction: 'Right' | 'Left') => {
    const cardCount = cards?.length;

    if (direction === 'Right' && cardCount) {
      activeIndex === cardCount - 1 ? setActive(0) : setActive(activeIndex + 1);
    } else if (direction === 'Left' && cardCount) {
      activeIndex === 0 ? setActive(cardCount - 1) : setActive(activeIndex - 1);
    }
  };

  useEffect(() => {
    const allCards = [...document.querySelectorAll('.card-deck-items')];
    setCardWidths(allCards.map(card => card.getBoundingClientRect().width));
  }, [activeIndex]);

  const calculateSlide = (arr: number[], gap: number) => arr.reduce((a, b) => a + b + gap, 0);

  return (
    <Flex flexDirection="column" gap="30px" paddingY={48} md={{ paddingY: 72 }} lg={{ paddingY: 96 }}>
      <Flex
        flexDirection="column"
        gap="48px"
        lg={{ flexDirection: isRowDirection ? 'row' : 'column', width: isRowDirection ? 'max-content' : '100%' }}
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          textAlign={isRowDirection ? 'start' : 'center'}
          marginX={isRowDirection ? 0 : 'auto'}
          minWidth="345px"
          gap="24px"
          maxWidth="770px"
          alignSelf={centerHeadingVertically ? 'center' : 'inherit'}
          lg={{ maxWidth: isRowDirection ? '370px' : '770px' }}
          xxxl={{ maxWidth: isRowDirection ? '590px' : '952px', gap: '16px' }}
        >
          {(headingComponent?.eyebrow || headingComponent?.heading || headingComponent?.body) && (
            <Flex flexDirection="column" gap="16px">
              {headingComponent?.eyebrow && <Text textStyle="overline">{headingComponent?.eyebrow}</Text>}
              {headingComponent?.heading && (
                <Heading as="h2" textStyle="md" md={{ textStyle: 'lg' }} fontWeight="bold">
                  {headingComponent?.heading}
                </Heading>
              )}
              {headingComponent?.body && (
                <Flex
                  flexDirection="column"
                  gap="24px"
                  fontSize={18}
                  alignItems={isRowDirection ? 'baseline' : 'center'}
                  textColor="gray-600"
                  css={`
                    > a,
                    button {
                      padding-left: 0px;
                    }
                  `}
                  md={{ fontSize: 20, gap: '24px' }}
                >
                  {richTextParser(headingComponent?.body as RichText)}
                </Flex>
              )}
            </Flex>
          )}
        </Flex>
        <Container marginLeft={10} css={{ clipPath: 'inset( 0 -100vw 0 0 )' }} width="max-content">
          <Flex
            gap={`${gapBetweenCards}px`}
            paddingX={8}
            paddingY={16}
            transform={`translateX(-${calculateSlide(cardWidths.slice(0, activeIndex), gapBetweenCards)}px)`}
            transition="transform 0.4s"
            flexWrap="nowrap"
            alignItems="stretch"
            xxxl={{
              gap: `${gapBetweenCardsXLDesktop}px`,
              transform: `translateX(-${calculateSlide(cardWidths.slice(0, activeIndex), gapBetweenCardsXLDesktop)}px)`,
            }}
          >
            {cards?.map(card => (
              <Container key={card?.sys.id} maxWidth="340px" sm={{ maxWidth: '100%' }} className="card-deck-items">
                <ComponentBasicCard {...card} />
              </Container>
            ))}
          </Flex>
        </Container>
      </Flex>
      <ComponentPagination
        dotsCount={cards?.length}
        activeDot={activeIndex}
        onLeftArrowClick={() => handleArrowClick('Left')}
        onRightArrowClick={() => handleArrowClick('Right')}
        onSetActiveDot={dot => setActive(dot)}
      />
    </Flex>
  );
};

export default ComponentCardDeck;

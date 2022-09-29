import { FC, useState } from 'react';
import { useMeasure } from 'react-use';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';

import CaseStudyCard from 'components/CaseStudies/CaseStudyCard';
import ComponentHeading from 'components/Heading/Heading';

import type { IComponentCaseStudies } from 'graphql/types';

type OffsetGridCardProps = BasicProps & IComponentCaseStudies;

const CaseStudies: FC<OffsetGridCardProps> = ({ headingComponent, caseStudyCardsCollection }) => {
  const [activeIndex, setActive] = useState(0);
  const [ref, { width: cardWidth }] = useMeasure<HTMLDivElement>();
  const caseStudyCards = caseStudyCardsCollection?.items;
  const gapBetweenCards = 64;

  const handleArrowClick = (direction: string) => {
    const cardCount = caseStudyCards?.length;
    if (direction === 'Right' && cardCount) {
      activeIndex === cardCount - 1 ? setActive(0) : setActive(activeIndex + 1);
    } else if (direction === 'Left' && cardCount) {
      activeIndex === 0 ? setActive(cardCount - 1) : setActive(activeIndex - 1);
    }
  };

  return (
    <Flex
      gap="48px"
      flexDirection="column"
      paddingY={48}
      justifyContent="center"
      md={{ paddingY: 72 }}
      lg={{ paddingY: 96 }}
    >
      <ComponentHeading
        backgroundIsDark={false}
        {...headingComponent}
        paddingY={0}
        md={{ paddingY: 0 }}
        lg={{ paddingY: 0 }}
      />
      <Container width={`${caseStudyCards?.length}00%`}>
        <Flex
          md={{ marginLeft: 32 }}
          xl={{ marginLeft: 40 }}
          xxl={{ marginLeft: 128 }}
          xxxl={{ marginLeft: 96 }}
          gap="64px"
          transform={`translateX(-${activeIndex * (cardWidth + gapBetweenCards)}px)`}
          transition="transform 0.5s"
          flexWrap="nowrap"
          alignItems="stretch"
        >
          {caseStudyCards?.map((caseStudyCard, index) => (
            <Flex alignItems="center" key={caseStudyCard?.sys.id} ref={ref}>
              <CaseStudyCard
                showCardProof={index === activeIndex}
                {...caseStudyCard}
                isActive={activeIndex === index}
              />
            </Flex>
          ))}
        </Flex>
      </Container>
      <ComponentPagination
        dotsCount={caseStudyCards?.length}
        activeDot={activeIndex}
        onLeftArrowClick={() => handleArrowClick('Left')}
        onRightArrowClick={() => handleArrowClick('Right')}
        onSetActiveDot={dot => setActive(dot)}
      />
    </Flex>
  );
};

export default CaseStudies;

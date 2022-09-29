import { FC, useState } from 'react';
import { useMeasure } from 'react-use';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';

import ComponentHeading from 'components/Heading/Heading';
import TestimonialCard from 'components/Testimonials/TestimonialCard';

import type { IComponentTestimonials } from 'graphql/types';

interface TestimonialsProps extends BasicProps, IComponentTestimonials {
  screenWidth: number;
}

const Testimonials: FC<TestimonialsProps> = ({
  headingComponent,
  contained,
  testimonialCardsCollection,
  screenWidth,
  background,
  ...props
}) => {
  const isContained = !background && contained ? true : false;
  const [activeIndex, setActive] = useState(0);
  const [ref, { width: cardWidth }] = useMeasure<HTMLDivElement>();

  const cards = testimonialCardsCollection?.items;
  const gap = 64;

  const cardCount = cards?.length || 1;

  const handleArrowClick = (direction: 'Right' | 'Left') => {
    if (direction === 'Right' && cardCount) {
      activeIndex === cardCount - 1 ? setActive(0) : setActive(activeIndex + 1);
    } else if (direction === 'Left' && cardCount) {
      activeIndex === 0 ? setActive(cardCount - 1) : setActive(activeIndex - 1);
    }
  };

  return (
    <Container paddingY={48} lg={{ paddingY: 72 }} xl={{ paddingY: 96 }} {...props}>
      {headingComponent && isContained && (
        <ComponentHeading
          {...headingComponent}
          backgroundIsDark={false}
          paddingAll={0}
          marginBottom={48}
          md={{ paddingAll: 0 }}
          lg={{ paddingAll: 0, marginBottom: 64 }}
          xl={{ paddingAll: 0 }}
          xxl={{ paddingAll: 0 }}
        />
      )}
      <Container overflowX="hidden">
        <Flex
          width={`calc(${cardCount}00% + ${(cardCount - 1) * gap}px)`}
          transform={`translateX(-${activeIndex * cardWidth + gap * activeIndex}px)`}
          transition="transform 0.5s"
          marginBottom={32}
          gap={gap + 'px'}
        >
          {cards?.map((card, index) => (
            <Container ref={ref} key={card?.sys.id}>
              <TestimonialCard
                {...card}
                screenWidth={screenWidth}
                contained={isContained}
                isActive={index === activeIndex}
              />
            </Container>
          ))}
        </Flex>
      </Container>
      <ComponentPagination
        dotsCount={cards?.length}
        activeDot={activeIndex}
        onLeftArrowClick={() => handleArrowClick('Left')}
        onRightArrowClick={() => handleArrowClick('Right')}
        onSetActiveDot={dot => setActive(dot)}
      />
    </Container>
  );
};

export default Testimonials;

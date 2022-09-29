import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import OffsetGridCard from 'components/OffsetGrid/OffsetGridCard';

import retrieveImageData from 'utils/retrieveImageData';

import type { IComponentOffsetGrid } from 'graphql/types';
import type { FC } from 'react';

type OffsetGridCardProps = BasicProps & IComponentOffsetGrid;

const ComponentOffsetGrid: FC<OffsetGridCardProps> = ({ heading, eyebrow, offsetGridCardsCollection, reference }) => {
  const offsetImageDetails = reference && retrieveImageData(reference);
  const cards = offsetGridCardsCollection?.items;

  return (
    <Container paddingY={96}>
      <Flex justifyContent="center">
        {offsetImageDetails && (
          <Flex display="none" xl={{ display: 'block', alignSelf: 'center' }}>
            <Image
              src={offsetImageDetails?.src}
              alt={offsetImageDetails?.alt}
              width={offsetImageDetails?.width}
              height={offsetImageDetails?.height}
            />
          </Flex>
        )}
        <Flex flexDirection="column" gap="48px" maxWidth="770px" lg={{ gap: '36px' }} xxxl={{ maxWidth: '952px' }}>
          <Flex flexDirection="column" gap="16px">
            {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
            {heading && (
              <Heading as="h2" textStyle="md" fontWeight="bold" md={{ textStyle: 'lg', fontWeight: 'bold' }}>
                {heading}
              </Heading>
            )}
          </Flex>
          <Flex gap="24px 30px" flexWrap="wrap" md={{ flexDirection: 'row' }} xxxl={{ gap: '24px' }}>
            {cards?.map(card => (
              <OffsetGridCard key={card?.sys.id} {...card} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ComponentOffsetGrid;

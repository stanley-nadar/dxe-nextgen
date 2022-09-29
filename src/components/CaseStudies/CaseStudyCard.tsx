import container from 'atoms/spacing/containers';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentButton from 'components/Button/ComponentButton';

import retrieveImageData from 'utils/retrieveImageData';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentCaseStudyCard } from 'graphql/types';
import type { FC } from 'react';

interface CaseStudyCardProps extends BasicProps, Omit<IComponentCaseStudyCard, 'sys' | 'contentfulMetadata'> {
  showCardProof: boolean;
  isActive: boolean;
}

const OffsetGridCard: FC<CaseStudyCardProps> = ({
  caseStudyImage,
  caseStudyLinkButton,
  caseStudyStats,
  quote,
  person,
  isActive,
  showCardProof,
}) => {
  const cardImageData = caseStudyImage && retrieveImageData(caseStudyImage);
  const nonActiveCardHeight = cardImageData?.height && cardImageData?.height - 25;

  return (
    <Flex
      flexDirection="column"
      backgroundColor="common-white"
      borderRadius="24px"
      minWidth="344px"
      boxShadow="xxl"
      overflowY="hidden"
      height={showCardProof ? 'inherit' : `${nonActiveCardHeight}px`}
      md={{ maxWidth: container.md }}
      lg={{ maxWidth: container.xl }}
      xxxl={{ maxWidth: '1196px' }}
    >
      <Image
        src={cardImageData?.src || ''}
        alt={cardImageData?.alt || ''}
        width={cardImageData?.width || 0}
        height={cardImageData?.height || 0}
        objectFit="cover"
      />
      <Flex maxHeight={showCardProof ? '320px' : '0px'} overflowY="hidden">
        <Flex
          paddingX={24}
          paddingY={24}
          flexDirection="column"
          md={{ flexDirection: 'row', paddingAll: 32 }}
          xl={{ paddingX: 56, paddingY: 64 }}
          gap="24px"
        >
          <Flex
            flexDirection="column"
            gap="16px"
            paddingBottom={24}
            borderBottom="1px solid"
            borderColor="gray-400"
            lineHeight={24}
            md={{
              paddingBottom: 0,
              paddingRight: 24,
              borderRight: '1px solid',
              borderBottom: '0',
              gap: '59px',
              minWidth: '270px',
              fontSize: 20,
              lineHeight: 30,
            }}
            lg={{ lineHeight: 32, gap: '38px' }}
            xl={{ fontSize: 24 }}
            xxxl={{ paddingRight: 64 }}
          >
            {richTextParser(caseStudyStats as RichText)}
          </Flex>
          <Flex
            flexDirection="column"
            gap="16px"
            lg={{ maxWidth: '670px', paddingLeft: 32 }}
            xxxl={{ paddingLeft: 48 }}
          >
            <Text as="div" textStyle="md" md={{ textStyle: 'lg' }} xl={{ textStyle: 'xl' }}>
              {richTextParser(quote as RichText, false)}
            </Text>
            <Text>
              {person?.fullName ? person.fullName + ', ' : null}
              {person?.role ? person.role + ', ' : null}
              {person?.company?.name}
            </Text>
            <ComponentButton marginTop="auto" tabIndex={isActive ? 0 : -1} {...caseStudyLinkButton} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OffsetGridCard;

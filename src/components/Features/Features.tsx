import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentButton from 'components/Button/ComponentButton';
import FeatureCard from 'components/Features/FeatureCard';

import retrieveImageData from 'utils/retrieveImageData';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentFeatures } from 'graphql/types';
import type { FC } from 'react';

interface FeaturesProps extends BasicProps, IComponentFeatures {
  backgroundIsDark: boolean;
}

const ComponentFeatures: FC<FeaturesProps> = ({
  heading,
  eyebrow,
  callToAction,
  featuresImage,
  imageSide,
  featureCardsCollection,
  body,
  backgroundIsDark,
}) => {
  const featureCards = featureCardsCollection?.items;
  const featuredImage = featuresImage && retrieveImageData(featuresImage);

  return (
    <Flex flexDirection="column" gap="48px" paddingY={48} md={{ paddingY: 72 }} lg={{ paddingY: 96 }}>
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        textAlign={featuredImage ? 'start' : 'center'}
        marginX={featuredImage ? 0 : 'auto'}
        minWidth="345px"
        gap="24px"
        maxWidth="770px"
        xxxl={{ maxWidth: '952px', gap: '16px' }}
        textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
      >
        {(eyebrow || heading || body) && (
          <Flex flexDirection="column" gap="16px">
            {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
            {heading && (
              <Heading as="h2" textStyle="md" md={{ textStyle: 'lg' }} fontWeight="bold">
                {heading}
              </Heading>
            )}
            {body && (
              <Flex
                flexDirection="column"
                gap="24px"
                textColor={backgroundIsDark ? 'gray-100' : 'gray-600'}
                fontSize={18}
                alignItems={featuredImage ? 'inherit' : 'center'}
                css={`
                  > a,
                  button {
                    padding-left: 0px;
                  }
                `}
                md={{ fontSize: 20, gap: '24px' }}
              >
                {richTextParser(body as RichText, backgroundIsDark)}
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
      <Flex
        flexDirection="column"
        gap="48px"
        textAlign={featuredImage ? 'inherit' : 'center'}
        md={{ textAlign: 'inherit', justifyContent: featuredImage ? 'flex-start' : 'center' }}
        xl={{ flexDirection: imageSide === 'Right' ? 'row' : 'row-reverse' }}
      >
        <Flex flexDirection="column" gap="48px">
          <Flex
            flexDirection="column"
            justifyContent={featuredImage ? 'flex-start' : 'center'}
            gap="48px"
            md={{ flexDirection: 'row', flexWrap: 'wrap', gap: '30px' }}
            xxxl={{ gap: featuredImage ? '30px' : '24px' }}
          >
            {featureCards?.map(card => (
              <FeatureCard
                key={card?.sys.id}
                backgroundIsDark={backgroundIsDark}
                includesImage={featuredImage ? true : false}
                {...card}
              />
            ))}
          </Flex>
          <ComponentButton
            isDark={backgroundIsDark}
            alignSelf={featuredImage ? 'inherit' : 'center'}
            paddingLeft={0}
            {...callToAction}
          />
        </Flex>
        {featuredImage && (
          <Flex
            lg={{ justifyContent: 'center' }}
            xl={{ width: '100%', justifyContent: imageSide === 'Right' ? 'flex-end' : 'flex-start' }}
            xxxl={{ width: '90%' }}
          >
            <Image
              src={featuredImage?.src || ''}
              width={featuredImage?.width || 0}
              height={featuredImage?.height || 0}
              alt={featuredImage?.alt || ''}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ComponentFeatures;

import useTranslation from 'next-translate/useTranslation';

import { ReactComponent as Quote } from 'assets/svg/quote.svg';

import { breakpoints } from 'atoms/breakpoints/breakpoints';
import { ColorList } from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { FlexProps } from 'quarks/interpolations/flex';

import ComponentButton from 'components/Button/ComponentButton';

import { toCamelCase } from 'utils/functions';
import retrieveImageData from 'utils/retrieveImageData';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentTestimonialCard } from 'graphql/types';
import type { FC } from 'react';

interface TestimonialCardProps extends FlexProps, Omit<IComponentTestimonialCard, 'contentfulMetadata' | 'sys'> {
  screenWidth: number;
  contained?: boolean;
  isActive?: boolean;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  background,
  person,
  image,
  screenWidth,
  contained,
  fullStoryUrl,
  isActive,
  ...props
}) => {
  const isMobile = screenWidth < Number(breakpoints.sm.replace('px', ''));
  const imageData = image && retrieveImageData(image);
  const { t } = useTranslation('common');

  return (
    <Flex
      paddingX={contained ? 24 : 0}
      paddingY={contained ? 40 : 0}
      backgroundColor={contained ? (toCamelCase(background) as ColorList) : undefined}
      borderRadius="24px"
      flexDirection="column"
      gap="32px"
      md={{ paddingAll: contained ? 48 : 0, flexDirection: 'row' }}
      xl={{ paddingAll: contained ? 64 : 0, gap: contained ? '32px' : '100px' }}
      xxl={{ paddingAll: contained ? 72 : 0 }}
      {...props}
    >
      <Flex flexDirection="column" gap="32px" justifyContent="center">
        {!contained && <Quote />}
        <Text as="div" fontSize={24} lineHeight={32} textColor="gray-900" xxl={{ fontSize: 30, lineHeight: 38 }}>
          {richTextParser(quote as RichText)}
        </Text>
        <Flex flexDirection="column" gap="4px">
          <Text
            textStyle="xl"
            fontWeight={contained ? 'medium' : undefined}
            lg={{ fontWeight: contained ? 'bold' : undefined }}
          >
            {person?.fullName}
          </Text>
          <Text textStyle="xl">{person?.role}</Text>
        </Flex>
        <ComponentButton
          size="large"
          hierarchy="Link Gray"
          cursor="pointer"
          tabIndex={isActive ? 0 : -1}
          endIcon=">"
          label={isMobile && contained ? t('readStory') : t('readFullCustomerStory')}
          href={fullStoryUrl || ''}
        />
      </Flex>
      <Container
        position="relative"
        height="max-content"
        width="100%"
        maxWidth="400px"
        alignSelf="center"
        md={{ flex: '1 0 40%', alignSelf: 'unset' }}
      >
        <Image alt={imageData?.alt || ''} height="400" width="400" objectPosition="top" src={imageData?.src || ''} />
      </Container>
    </Flex>
  );
};

export default TestimonialCard;

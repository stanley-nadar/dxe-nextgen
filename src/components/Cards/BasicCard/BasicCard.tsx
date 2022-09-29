import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import Chip, { ChipColors } from 'molecules/Chip/Chip';

import { toCamelCase } from 'utils/functions';
import retrieveImageData from 'utils/retrieveImageData';

import type { IComponentBasicCard, IComponentImage } from 'graphql/types';
import type { FC } from 'react';

type BasicCardProps = BasicProps & Omit<IComponentBasicCard, 'sys' | 'contentfulMetadata'>;

export const sizeMap = {
  xs: '270px',
  sm: '345px',
  md: '370px',
  lg: '570px',
  xl: '670px',
  xxl: '770px',
} as const;
type SizeOptions = keyof typeof sizeMap;

const cardHeight = 532;
const imageHeight = 300;

const gradientTransition = `
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 86.07%);
  :before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    z-index: -1;
    transition: opacity 0.2s linear;
    opacity: 0;
  }
  :hover::before {
    opacity: 1;
  }`;

const lineClamp = (lines: number) => `
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  `;

const BasicCard: FC<BasicCardProps> = ({
  size,
  variant,
  heading,
  body,
  category,
  categoryColor,
  longHeading,
  date,
  link,
  mediaReference,
  ...props
}) => {
  const assetData = mediaReference?.__typename?.includes('Image')
    ? retrieveImageData(mediaReference as IComponentImage)
    : undefined;
  const isXs = size === 'xs';
  const isHuge = size === 'xxl';
  const isOverlay = !isXs && variant === 'overlay';

  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  });

  return (
    <Link
      href={link || ''}
      textDecoration="none"
      css={`
        :visited {
          color: inherit;
        }
      `}
    >
      <Flex
        maxWidth={sizeMap[(size as SizeOptions) || 'md']}
        flexDirection={isHuge ? 'row' : 'column'}
        borderRadius="24px"
        backgroundColor={variant === 'longHeading' ? 'primary-25' : undefined}
        boxShadow="lg"
        overflowY="hidden"
        position="relative"
        minHeight={cardHeight + 'px'}
        transition="box-shadow .2s"
        hover={{ boxShadow: isOverlay ? undefined : 'xxxl' }}
        css={`
          ${isOverlay &&
          `:hover p {
            max-height: ${cardHeight + 'px'};
          }`}
        `}
        {...props}
      >
        {assetData && (
          <Container
            width="100%"
            zIndex={isOverlay ? -1 : 1}
            height={isOverlay || isHuge ? cardHeight + 'px' : imageHeight + 'px'}
            position={isOverlay ? 'absolute' : 'relative'}
          >
            <Image src={assetData?.src} alt={assetData?.alt} layout="fill" objectFit="cover" />
          </Container>
        )}
        <Flex
          gap={isXs || isOverlay ? '8px' : '16px'}
          flexDirection="column"
          paddingAll={isHuge && variant === 'longHeading' ? 32 : 24}
          paddingBottom={isOverlay ? 24 : 32}
          textColor={isOverlay ? 'common-white' : undefined}
          minHeight={isOverlay ? cardHeight + 'px' : undefined}
          justifyContent={isOverlay ? 'flex-end' : 'flex-start'}
          position="relative"
          zIndex={1}
          css={`
            ${isOverlay && gradientTransition}
          `}
        >
          {category && <Chip label={category} color={toCamelCase(categoryColor || 'Gray') as ChipColors} />}
          {variant === 'longHeading' ? (
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              gap="10px"
              height="100%"
              width={isHuge ? '306px' : undefined}
            >
              <Heading
                as="h6"
                textStyle="xs"
                fontWeight="bold"
                css={`
                  ${!isHuge && lineClamp(3)}
                `}
              >
                {longHeading}
              </Heading>
              <Text textStyle="xl" textColor="gray-600">
                {formattedDate}
              </Text>
            </Flex>
          ) : (
            <>
              <Heading as="h6" textStyle={isOverlay ? 'sm' : 'xs'} fontSize={isXs ? 20 : undefined} fontWeight="bold">
                {heading}
              </Heading>
              <Paragraph
                textColor={isOverlay ? 'common-white' : 'gray-500'}
                maxHeight={isOverlay ? 0 : undefined}
                overflowY="hidden"
                height="auto"
                transition="all .6s ease"
                css={`
                  ${!isOverlay && lineClamp(2)}
                `}
              >
                {body}
              </Paragraph>
            </>
          )}
        </Flex>
      </Flex>
    </Link>
  );
};

export default BasicCard;

BasicCard.defaultProps = {};

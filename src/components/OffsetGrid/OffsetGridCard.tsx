import { ArrowRight } from 'react-feather';

import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import type { IComponentOffsetGridOffsetGridCardsItem } from 'graphql/types';
import type { FC } from 'react';

type OffsetCardProps = BasicProps & Omit<IComponentOffsetGridOffsetGridCardsItem, 'sys' | 'contentfulMetadata'>;

const OffsetGridCard: FC<OffsetCardProps> = ({ heading, subheading, link }) => (
  <Link
    href={link || ''}
    textDecoration="none"
    textColor="gray-900"
    backgroundColor="common-white"
    maxWidth="370px"
    width="100%"
    xxxl={{ maxWidth: '464px' }}
    borderRadius="16px"
    hover={{
      backgroundImage: 'gradient-rainbowHover',
      height: 'fit-content',
    }}
    css={`
      &&& {
        :focus-visible {
          outline: none;
          & > div > div:first-of-type {
            outline: solid ${color.primaryBlue[700]};
          }
        }
      }
    `}
    paddingAll={2}
  >
    <Flex
      gap="8px"
      flexDirection="column"
      borderRadius="14px"
      paddingAll={24}
      height="100%"
      backgroundColor="common-white"
      hover={{ textColor: 'primary-900' }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        {heading && (
          <Text textStyle="xl" fontWeight="bold">
            {heading}
          </Text>
        )}
        <ArrowRight />
      </Flex>
      <Flex>
        {subheading && (
          <Text textStyle="md" textColor="gray-500">
            {subheading}
          </Text>
        )}
      </Flex>
    </Flex>
  </Link>
);

export default OffsetGridCard;

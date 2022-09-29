import Icon, { iconIds } from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import { stringToKebabCase } from 'utils/functions';

import type { IComponentFeaturesCard } from 'graphql/types';
import type { FC } from 'react';

interface FeatureCardProps extends BasicProps, Omit<IComponentFeaturesCard, 'sys' | 'contentfulMetadata'> {
  includesImage: boolean;
  backgroundIsDark: boolean;
}

const OffsetGridCard: FC<FeatureCardProps> = ({ icon, heading, backgroundIsDark, subheading, includesImage }) => (
  <Flex
    flexDirection="column"
    gap="8px"
    alignItems={includesImage ? 'baseline' : 'center'}
    textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
    md={{ maxWidth: includesImage ? '370px' : '337px', alignItems: 'baseline' }}
    xl={{ maxWidth: '240px' }}
    xxl={{ maxWidth: '270px' }}
    xxxl={{ maxWidth: '333px' }}
  >
    {icon && <Icon id={stringToKebabCase(icon as iconIds) as iconIds} size={40} />}
    {heading && (
      <Text textStyle="lg" fontWeight="bold">
        {heading}
      </Text>
    )}
    {subheading && <Text textColor={backgroundIsDark ? 'gray-100' : 'gray-500'}>{subheading}</Text>}
  </Flex>
);

export default OffsetGridCard;

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import type { IComponentAccolades } from 'graphql/types';
import type { FC } from 'react';

type AccoladesProps = BasicProps & Omit<IComponentAccolades, 'sys' | 'contentfulMetadata'>;

const ComponentBasicAccolades: FC<AccoladesProps> = ({ heading, accoladesImageCollection }) => {
  const accoladesImages = accoladesImageCollection?.items;

  return (
    <Flex flexDirection="column" gap="16px" md={{ gap: '32px' }}>
      {heading && (
        <Text fontSize={20} md={{ fontSize: 24 }} fontWeight="bold">
          {heading}
        </Text>
      )}
      <Flex gap="40px" marginX={0}>
        {accoladesImages?.map(image => (
          <Image
            src={image?.image?.url || ''}
            alt={image?.image?.title || ''}
            width={image?.image?.width || 0}
            height={image?.image?.height || 0}
            key={image?.image?.title}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ComponentBasicAccolades;

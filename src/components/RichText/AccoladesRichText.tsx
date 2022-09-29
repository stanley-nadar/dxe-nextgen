import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import type { BasicProps } from 'quarks/interpolations/basic';

import type { IComponentAccolades } from 'graphql/types';
import type { FC } from 'react';

type AccoladesProps = BasicProps & IComponentAccolades;

const ComponentAccoladesRichText: FC<AccoladesProps> = ({ accoladesImageCollection }) => {
  const accoladesImages = accoladesImageCollection?.items;

  return (
    <Flex gap="40px" marginX="auto" maxWidth="430px" sm={{ marginX: 0 }}>
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
  );
};

export default ComponentAccoladesRichText;

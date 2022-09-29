import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentTestimonialCard } from 'graphql/types';
import type { FC } from 'react';

type TestimonialProps = BasicProps & Omit<IComponentTestimonialCard, 'contentfulMetadata' | 'sys'>;

const ComponentTestimonialRichText: FC<TestimonialProps> = ({ quote, person, image }) => (
  <Flex flexDirection="column" gap="24px" md={{ gap: '32px' }}>
    {quote && <Text fontSize={20}>{richTextParser(quote as RichText)}</Text>}
    <Flex justifyContent="space-between">
      <Flex flexDirection="column" gap="8px">
        {person?.fullName && (
          <Text fontSize={18} textColor="gray-900" fontWeight="bold">
            {person?.fullName}
          </Text>
        )}
        {person?.role && (
          <Text fontSize={18} textColor="gray-600">
            {person?.role}
          </Text>
        )}
      </Flex>
      <Flex width="80px" height="80px" position="relative">
        <Image src={image?.image?.url || ''} layout="fill" alt={image?.image?.title || ''} />
      </Flex>
    </Flex>
  </Flex>
);

export default ComponentTestimonialRichText;

import { FC } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import retrieveImageData from 'utils/retrieveImageData';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentSwitchback } from 'graphql/types';

type SwitchbackProps = BasicProps & IComponentSwitchback;

const ComponentSwitchback: FC<SwitchbackProps> = ({ eyebrow, heading, body, reference, assetSide }) => {
  const switchbackImageDetails = reference && retrieveImageData(reference);

  return (
    <Flex
      flexDirection="column"
      paddingY={48}
      gap="48px"
      md={{ paddingY: 72 }}
      xxl={{ paddingY: 96, flexDirection: assetSide === 'Right' ? 'row' : 'row-reverse', gap: '100px' }}
    >
      <Flex flexDirection="column" gap="16px" alignSelf="center" xxl={{ maxWidth: '610px' }}>
        {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
        {heading && (
          <Heading as="h2" textStyle="md" md={{ textStyle: 'lg' }} fontWeight="bold">
            {heading}
          </Heading>
        )}
        {body && (
          <Flex flexDirection="column" gap="32px" alignItems="start" fontSize={18} md={{ fontSize: 20 }}>
            {richTextParser(body as RichText)}
          </Flex>
        )}
      </Flex>
      <Container alignSelf="center">
        {switchbackImageDetails && (
          <Image
            src={switchbackImageDetails?.src}
            alt={switchbackImageDetails?.alt}
            width={switchbackImageDetails?.width}
            height={switchbackImageDetails?.height}
          />
        )}
      </Container>
    </Flex>
  );
};
export default ComponentSwitchback;

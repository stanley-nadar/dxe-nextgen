import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import retrieveImageData from 'utils/retrieveImageData';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentAccolades } from 'graphql/types';
import type { FC } from 'react';

type AccoladesProps = BasicProps & IComponentAccolades;

const ComponentAccolades: FC<AccoladesProps> = ({ heading, body, eyebrow, accoladesImageCollection }) => {
  const accoladesImages = accoladesImageCollection?.items;

  return (
    <Container paddingY={48} md={{ paddingY: 72 }} lg={{ paddingY: 96 }}>
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        textAlign="center"
        alignItems="center"
        minWidth="345px"
        marginX="auto"
        maxWidth="770px"
        marginBottom={32}
        xxxl={{ maxWidth: '952px' }}
      >
        <Flex flexDirection="column" gap="16px" md={{ gap: '32px' }}>
          {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
          {heading && (
            <Heading as="h2" textStyle="md" md={{ textStyle: 'lg' }} fontWeight="bold">
              {heading}
            </Heading>
          )}
          {body && (
            <Flex
              flexDirection="column"
              gap="32px"
              textColor="gray-600"
              justifyContent="center"
              fontSize={18}
              md={{ fontSize: 20 }}
            >
              {richTextParser(body as RichText)}
            </Flex>
          )}
        </Flex>
      </Flex>
      {accoladesImages && (
        <Flex
          gap="16px"
          textAlign="center"
          alignItems="center"
          minWidth="345px"
          marginX="auto"
          maxWidth="770px"
          justifyContent="space-between"
          flexDirection="column"
          md={{ maxWidth: '1440px', flexDirection: 'row' }}
        >
          {accoladesImages?.map(image => {
            const imageData = retrieveImageData(image);

            return (
              <Image
                src={imageData.src}
                alt={imageData.alt}
                width={imageData.width}
                height={imageData.height}
                key={imageData.key}
              />
            );
          })}
        </Flex>
      )}
    </Container>
  );
};

export default ComponentAccolades;

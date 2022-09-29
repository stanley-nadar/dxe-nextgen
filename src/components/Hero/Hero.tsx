import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import colorizeText from 'utils/colorizeText';
import retrieveImageData from 'utils/retrieveImageData';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentHero, IComponentImage } from 'graphql/types';
import type { FC } from 'react';

interface HeroProps extends BasicProps, IComponentHero {
  backgroundIsDark: boolean;
}

const getMedia = (reference: IComponentImage) => {
  if (reference.image) {
    const imageData = retrieveImageData(reference);

    return (
      <Image
        src={imageData?.src}
        alt={imageData?.alt}
        width={imageData?.width}
        height={imageData?.height}
        minWidth="100%"
        maxHeight="100%"
      />
    );
  } else {
    return null;
  }
};

const ComponentHero: FC<HeroProps> = ({ eyebrow, heading, body, backgroundIsDark, reference }) => (
  <Container paddingY={136} md={{ paddingY: 176 }} lg={{ paddingY: 240 }} xl={{ paddingY: 280 }}>
    <Flex
      flexDirection="column"
      marginX="auto"
      gap="16px"
      md={{ gap: '24px' }}
      lg={{ flexDirection: 'row' }}
      textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
    >
      <Flex
        alignSelf="center"
        flexDirection="column"
        gap="16px"
        lg={{ maxWidth: '500px' }}
        xxxl={{ maxWidth: '700px' }}
      >
        {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
        {heading && (
          <Heading as="h2" textStyle="lg" md={{ textStyle: 'xl' }} lg={{ textStyle: 'xxl' }} fontWeight="bold">
            {colorizeText(heading, backgroundIsDark)}
          </Heading>
        )}
        {body && (
          <Flex
            flexDirection="column"
            gap="32px"
            fontSize={20}
            md={{ fontSize: 24 }}
            textColor={backgroundIsDark ? 'common-white' : 'gray-600'}
            alignItems="start"
          >
            {richTextParser(body as RichText, backgroundIsDark)}
          </Flex>
        )}
      </Flex>
      {reference && <Flex alignSelf="center">{getMedia(reference)}</Flex>}
    </Flex>
  </Container>
);
export default ComponentHero;

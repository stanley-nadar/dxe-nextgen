import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import colorizeText from 'utils/colorizeText';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentHeading } from 'graphql/types';
import type { FC } from 'react';

interface HeadingProps extends BasicProps, Omit<IComponentHeading, 'sys' | 'contentfulMetadata'> {
  backgroundIsDark: boolean;
}

const ComponentHeading: FC<HeadingProps> = ({ eyebrow, backgroundIsDark, heading, body, ...props }) => (
  <Container paddingY={48} md={{ paddingY: 72 }} lg={{ paddingY: 96 }} {...props}>
    <Flex
      flexDirection="column"
      flexWrap="nowrap"
      textAlign="center"
      alignItems="center"
      minWidth="345px"
      marginX="auto"
      gap="16px"
      md={{ gap: '24px' }}
      maxWidth="770px"
      xxxl={{ maxWidth: '952px' }}
      textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
    >
      <Flex flexDirection="column" gap="16px">
        {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
        {heading && (
          <Heading as="h2" textStyle="md" md={{ textStyle: 'lg' }} fontWeight="bold">
            {colorizeText(heading, backgroundIsDark)}
          </Heading>
        )}
        {body && (
          <Flex
            flexDirection="column"
            gap="32px"
            textColor={backgroundIsDark ? 'gray-100' : 'gray-600'}
            justifyContent="center"
            alignItems="center"
            fontSize={18}
            md={{ fontSize: 20 }}
          >
            {richTextParser(body as RichText, backgroundIsDark)}
          </Flex>
        )}
      </Flex>
    </Flex>
  </Container>
);

export default ComponentHeading;

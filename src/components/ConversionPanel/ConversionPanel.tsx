import { FC } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

import colorizeText from 'utils/colorizeText';
import { getBackground } from 'utils/functions';
import retrieveImageData from 'utils/retrieveImageData';
import richTextParser, { RichText } from 'utils/richTextParser';

import type { IComponentConversionPanel, IComponentImage } from 'graphql/types';

interface ConversionPanelProps extends BasicProps, IComponentConversionPanel {
  backgroundIsDark: boolean;
  windowSize: {
    width: number;
  };
}

const ConversionPanel: FC<ConversionPanelProps> = ({
  heading,
  eyebrow,
  body,
  contained,
  reference,
  containedBackground,
  backgroundIsDark,
  windowSize,
  rainbowLine,
  ...props
}) => {
  const { width } = windowSize;

  const addContainedString =
    containedBackground === 'Dark Gradient' ? containedBackground : containedBackground + ' Contained';

  const containedBackgroundImage =
    contained && containedBackground !== 'White'
      ? getBackground('ConversionPanel', addContainedString, width)
      : undefined;

  const containedBackgroundIsDark = ['Dark Pattern', 'Dark Gradient'].includes(containedBackground || '');

  const whiteText = contained ? containedBackgroundIsDark : backgroundIsDark;

  const isButtonDark = contained ? containedBackgroundIsDark : backgroundIsDark;

  const getReference = (asset: ConversionPanelProps['reference']) => {
    switch (asset?.__typename) {
      case 'ComponentImage': {
        const imageData = reference && retrieveImageData(reference as IComponentImage);

        return imageData && <Image src={imageData.src} alt={imageData.alt || ''} layout="fill" objectFit="contain" />;
      }
      default:
        return null;
    }
  };

  const earlyWrap = `> .button-wrapper {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  > .button-wrapper button {
    width: 100% !important;
  }`;

  return (
    <Flex
      marginX="auto"
      marginY={contained ? 48 : 0}
      gap="32px"
      flexDirection="column"
      position={contained ? 'relative' : undefined}
      overflowY="hidden"
      borderRadius="16px"
      paddingY={reference ? 48 : 0}
      paddingX={12}
      backgroundColor={contained && containedBackground === 'White' ? 'common-white' : undefined}
      boxShadow={contained ? '0px 24px 48px -12px rgba(37, 49, 56, 0.18)' : ''}
      backgroundShorthand={containedBackground === 'Dark Gradient' ? containedBackgroundImage?.backgroundGradient : ''}
      sm={{ paddingX: 48 }}
      md={{
        maxWidth: contained ? '770px' : '1440px',
        flexDirection: reference ? 'row' : 'column',
        marginY: contained ? 72 : 0,
        paddingX: contained ? 96 : undefined,
      }}
      lg={{
        maxWidth: contained ? '1170px' : '1440px',
      }}
      xxl={{ marginY: contained ? 96 : 0, paddingX: contained ? 96 : undefined }}
      xxxl={{ maxWidth: '1440px' }}
      textColor={whiteText ? 'common-white' : 'gray-900'}
    >
      {containedBackgroundImage?.backgroundPath && (
        <Image src={containedBackgroundImage?.backgroundPath} layout="fill" objectFit="cover" alt="" zIndex={-1} />
      )}
      <Flex
        flexDirection="column"
        gap="16px"
        paddingY={!reference ? 48 : undefined}
        maxWidth={contained ? '1440px' : ''}
        textAlign="center"
        after={
          rainbowLine
            ? {
                content: '',
                height: '5px',
                left: contained ? '0' : '-32px',
                right: contained ? '0' : '-32px',
                position: 'absolute',
                bottom: contained ? undefined : '0',
                top: contained ? '0' : undefined,
                backgroundImage: 'assets/rainbowLine.png',
                backgroundSize: 'cover',
                zIndex: 1,
              }
            : undefined
        }
        lg={{
          marginX: 'auto',
          paddingY: reference ? 24 : 72,
          width: reference && !contained ? '50%' : undefined,
          textAlign: reference && !contained ? 'left' : 'center',
        }}
        xxl={{ paddingY: 96 }}
        {...props}
      >
        {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
        {heading && (
          <Heading as="h2" textStyle="md" lg={{ textStyle: 'lg' }}>
            {colorizeText(heading, whiteText)}
          </Heading>
        )}
        {body && (
          <Flex
            flexDirection="column"
            gap="32px"
            alignItems={reference && !contained ? 'flex-start' : 'center'}
            lg={{ fontSize: 20 }}
            textColor={whiteText ? 'gray-50' : 'gray-600'}
            css={reference && !contained ? `@media screen and (max-width: 1100px) {${earlyWrap}}` : undefined}
          >
            {richTextParser(body as RichText, isButtonDark)}
          </Flex>
        )}
      </Flex>
      {!contained &&
        reference && ( // TODO add logic for reference as form when form created
          <Container
            position="relative"
            width="50%"
            display="none"
            md={{
              display: 'block',
            }}
          >
            {getReference(reference)}
          </Container>
        )}
    </Flex>
  );
};

export default ConversionPanel;

ConversionPanel.defaultProps = {};

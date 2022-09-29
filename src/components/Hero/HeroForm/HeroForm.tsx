import { useMeasure } from 'react-use';

import { breakpoints } from 'atoms/breakpoints/breakpoints';
import { ColorList } from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import BasicAccolades from 'components/Accolades/BasicAccolades';
import ComponentSignUpForm from 'components/Forms/SignUpForm/SignUpForm';
import ComponentTestimonial from 'components/RichText/TestimonialRichText';
import ComponentTrustBar from 'components/TrustBar/TrustBar';
import UnorderedList from 'components/UnorderedList/UnorderedList';
import ComponentVideo from 'components/Video/ComponentVideo';

import { toCamelCase } from 'utils/functions';

import type {
  IComponentAccolades,
  IComponentHeroForm,
  IComponentImage,
  IComponentTestimonialCard,
  IComponentVideo,
} from 'graphql/types';
import type { FC } from 'react';

interface HeroFormProps extends BasicProps, IComponentHeroForm {
  screenWidth: number;
}

const getMedia = (
  mediaReference: IComponentImage | IComponentAccolades | IComponentTestimonialCard | IComponentVideo,
) => {
  switch (mediaReference.__typename) {
    case 'ComponentImage':
      return (
        <Image
          alignSelf="center"
          src={mediaReference?.image?.url || ''}
          alt={mediaReference?.image?.description || ''}
          width={mediaReference?.image?.width || 0}
          height={mediaReference?.image?.height || 0}
        />
      );
    case 'ComponentTestimonialCard':
      return <ComponentTestimonial {...mediaReference} />;
    case 'ComponentAccolades':
      return <BasicAccolades {...mediaReference} />;
    case 'ComponentVideo':
      return <ComponentVideo {...mediaReference} xl={{ height: '264px' }} xxl={{ height: '329px' }} />;

    default:
      return null;
  }
};

const ComponentHeroForm: FC<HeroFormProps> = ({
  eyebrow,
  heading,
  contentBackground,
  subheading,
  heroFeatureList,
  mediaReference,
  form,
  screenWidth,
  trustbar,
}) => {
  const [ref, { height: trustbarHeight }] = useMeasure<HTMLDivElement>();

  return (
    <>
      <Container
        before={{
          content: '',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: -10,
          width: screenWidth < 1280 ? breakpoints.xl : 0,
          backgroundColor: toCamelCase(contentBackground) as ColorList,
          height: trustbar ? `calc(100% - ${trustbarHeight}px)` : '100%',
        }}
        paddingY={120}
        md={{ paddingY: 152 }}
        xxxl={{ paddingY: 160 }}
      >
        <Flex justifyContent="space-around" gap="230px" xxxl={{ gap: '270px' }}>
          <Container borderRadius="24px" width="auto" xxl={{ width: '480px' }} xxxl={{ width: '584px' }}>
            <Flex
              flexDirection="column"
              position="relative"
              gap="32px"
              md={{ gap: '64px' }}
              after={{
                content: '',
                position: 'absolute',
                width: screenWidth < 1920 ? 'calc(100% + 200px)' : 'calc(100% + 240px)',
                height: '1030px',
                top: '-170px',
                borderRadius: '0px 0px 24px 24px',
                left: screenWidth < 1920 ? '-100px' : '-120px',
                zIndex: -10,
                backgroundColor: toCamelCase(contentBackground) as ColorList,
              }}
            >
              <Flex gap="32px" flexDirection="column">
                <Flex gap="16px" flexDirection="column">
                  {eyebrow && <Text textStyle="overline">{eyebrow}</Text>}
                  {heading && (
                    <Heading
                      as="h1"
                      textStyle="md"
                      fontWeight="bold"
                      md={{ textStyle: 'lg', fontWeight: 'bold' }}
                      xl={{ textStyle: 'xl', fontWeight: 'bold' }}
                    >
                      {heading}
                    </Heading>
                  )}
                  {subheading && (
                    <Text textStyle="xl" fontSize={24}>
                      {subheading}
                    </Text>
                  )}
                </Flex>
                {heroFeatureList && <UnorderedList listItemsCollection={heroFeatureList.listItemsCollection} />}
              </Flex>
              {form && (
                <Container xl={{ display: 'none' }}>
                  <ComponentSignUpForm {...form} />
                </Container>
              )}
              {mediaReference && getMedia(mediaReference)}
            </Flex>
          </Container>
          {form && (
            <Container alignSelf="center" display="none" xl={{ display: 'flex' }}>
              <ComponentSignUpForm {...form} border="" />
            </Container>
          )}
        </Flex>
      </Container>
      {trustbar && (
        <Container ref={ref}>
          <ComponentTrustBar backgroundIsDark={false} windowWidth={screenWidth} {...trustbar} />
        </Container>
      )}
    </>
  );
};
export default ComponentHeroForm;

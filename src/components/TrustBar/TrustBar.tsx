import useMediaQuery from '@mui/material/useMediaQuery';
import Marquee from 'react-fast-marquee';

import { media } from 'atoms/breakpoints/breakpoints';
import { container } from 'atoms/spacing/containers';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

import retrieveImageData from 'utils/retrieveImageData';

import type { IComponentTrustBar, IEntityCompany, Maybe } from 'graphql/types';
import type { FC } from 'react';

interface TrustBarProps extends BasicProps, IComponentTrustBar {
  backgroundIsDark: boolean;
  windowWidth: number;
}

const setLogoMinimum = (logos: Maybe<IEntityCompany>[]): Maybe<IEntityCompany>[] | undefined => {
  if (logos.length >= 12) {
    return logos;
  }

  return setLogoMinimum([...logos, ...logos]);
};

const ComponentTrustBar: FC<TrustBarProps> = ({
  heading,
  variant,
  companyCollection,
  backgroundIsDark,
  windowWidth: width,
  ...props
}) => {
  const maxContainerSize = Number(container.xxl.replace('px', ''));
  const calculatedMargin = (width - maxContainerSize) / 2;
  const marginSize = calculatedMargin > 96 ? calculatedMargin : 96;
  const isTablet = useMediaQuery(media.md);
  const gradientMask =
    'linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(255, 255, 255, 0) 100% )';

  const entities =
    companyCollection?.items && variant === 'Scrolling'
      ? setLogoMinimum(companyCollection?.items)
      : companyCollection?.items;

  return (
    <Container paddingY={32} width="100%" {...props}>
      <Container textAlign="center" marginBottom={40}>
        {heading && (
          <Text textStyle="overline" textColor={backgroundIsDark ? 'common-white' : undefined}>
            {heading}
          </Text>
        )}
      </Container>
      {variant === 'Scrolling' ? (
        <Container position="relative" height="40px">
          <Container
            position="absolute"
            marginX="auto"
            left="-32px"
            right="-32px"
            top="0"
            md={{ left: '-96px', right: '-96px' }}
            xxl={{ left: `-${marginSize}px`, right: `-${marginSize}px` }}
            css={`
              mask-image: ${backgroundIsDark && gradientMask};
            `}
          >
            <Marquee gradientWidth={backgroundIsDark ? 0 : 100} pauseOnHover speed={30}>
              <Flex gap="48px" paddingX={24} lg={{ gap: '80px', paddingX: 40 }}>
                {entities &&
                  entities.map(company => {
                    const companyImage = company?.companyLogoLight && retrieveImageData(company.companyLogoLight);

                    return (
                      <Container key={company?.sys.id}>
                        {companyImage && (
                          <Image
                            src={companyImage.src}
                            alt={company?.name || ''}
                            width="100%"
                            height="40%"
                            white={backgroundIsDark}
                            loading="eager"
                          />
                        )}
                      </Container>
                    );
                  })}
              </Flex>
            </Marquee>
          </Container>
        </Container>
      ) : (
        <Container>
          <Grid
            placeItems="center"
            gap="24px"
            css={`
              justify-content: center;
            `}
            md={{ gridTemplate: 'repeat(5, 40px) / repeat(2, 200px)', gap: '16px' }}
            lg={{ gridTemplate: 'repeat(2, 40px) / repeat(5, 1fr)' }}
          >
            {entities &&
              entities.map((company, index) => {
                const companyImage = company?.companyLogoLight && retrieveImageData(company.companyLogoLight);

                if (!isTablet && index > 6) {
                  return;
                }

                return (
                  companyImage && (
                    <Container key={company?.sys.id}>
                      <Image
                        width={200}
                        height={20}
                        objectFit="contain"
                        objectPosition="center"
                        src={companyImage.src}
                        alt={company?.name || ''}
                        white={backgroundIsDark}
                      />
                    </Container>
                  )
                );
              })}
          </Grid>
        </Container>
      )}
    </Container>
  );
};

export default ComponentTrustBar;

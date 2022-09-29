import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';

import { breakpoints } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import type { BasicProps } from 'quarks/interpolations/basic';
import { pseudos } from 'quarks/quarkUtils/getPseudoClassProps';
import { pseudoElements } from 'quarks/quarkUtils/getPseudoEleProps';
import basicCSS from 'quarks/styleProps/basic';

import { objectEntries, valueof } from 'utils/typeUtils';

type ModifiedBasicProps = Omit<BasicProps, 'height' | 'width' | 'objectPosition' | 'objectFit'>;

interface CustomImageProps extends ModifiedBasicProps, ImageProps {
  height?: number | string;
  width?: number | string;
  alt: string;
  objectPosition?: string;
  objectFit?: BasicProps['objectFit'];
  /**
   * if true, image will be all white (use for svg's in dark mode)
   */
  white?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { height, width, objectPosition, objectFit, ...remainingProps } = basicCSS;

const customCSS = { ...remainingProps, ...breakpoints, ...pseudos, ...pseudoElements };
const allCSSKeys = Object.keys(customCSS);

const Image: FC<CustomImageProps> = ({ white, ...props }) => {
  type filteredProp = [keyof CustomImageProps, valueof<CustomImageProps>];

  const { filteredQuarkProps, filteredNextProps } = objectEntries(props).reduce(
    (result, prop) => {
      result[allCSSKeys.includes(prop[0]) ? 'filteredQuarkProps' : 'filteredNextProps'].push(prop);

      return result;
    },
    { filteredQuarkProps: [], filteredNextProps: [] } as {
      filteredQuarkProps: filteredProp[];
      filteredNextProps: filteredProp[];
    },
  );

  const quarkProps = Object.fromEntries(filteredQuarkProps);
  const { src, ...nextProps } = Object.fromEntries(filteredNextProps);

  return (
    <Container
      width="fit-content"
      height="fit-content"
      filter={white ? 'brightness(0) invert(1)' : undefined}
      {...quarkProps}
    >
      <NextImage src={src} {...nextProps} />
    </Container>
  );
};

export default Image;

import type { IComponentImage } from 'graphql/types';

interface imageTypes {
  src: string;
  alt: string;
  width: number;
  height: number;
  key: string;
}

/**
 * @param content Component Image Data Model ;
 * @returns Image-Data from either Bynder or Contentful
 */
const retrieveImageData = (reference: IComponentImage | null) => {
  const bynderImage = reference?.bynderImage;
  const contentfulImage = reference?.image;
  const bynderFallbackAltText =
    bynderImage && bynderImage[0]?.tags ? bynderImage[0].tags.join(' ') : reference?.alternateText;

  const imageData: imageTypes = bynderImage
    ? {
        src: bynderImage[0].src || '',
        alt: bynderFallbackAltText,
        width: bynderImage[0].width || 0,
        height: bynderImage[0].height || 0,
        key: bynderImage[0].id || '',
      }
    : {
        src: contentfulImage?.url || '',
        alt: contentfulImage?.description || '',
        width: contentfulImage?.width || 0,
        height: contentfulImage?.height || 0,
        key: contentfulImage?.sys?.id || '',
      };

  return imageData;
};

export default retrieveImageData;

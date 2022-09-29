import { colorListArray, gradient } from 'atoms/colors/colors';

import { doesArrayContainItem, keyExistsOnObject } from 'utils/typeUtils';

/**
 * @param hexString a valid hex string with or without the leading #
 * @returns an array with matched [RRR, BBB, GGG] values
 */
export const hexToRGB = (hexString: string) => {
  const hex = hexString.length === 7 ? hexString.substring(1).match(/.{1,2}/g) : hexString.match(/.{1,2}/g);
  const rgbArray = hex && [parseInt(hex[0], 16), parseInt(hex[1], 16), parseInt(hex[2], 16)];
  if (!rgbArray) {
    throw new Error('You must provide a valid hex string');
  }

  return rgbArray as [number, number, number];
};

/**
 * @param string any string, including ones already in camelCase
 * @returns the string in camelCase form
 */
export const toCamelCase = (string?: string | null) =>
  string
    ? string
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
        .replace(/\s+/g, '')
    : '';

/**
 * @param id any string, including special characters
 * @returns an all lowercase string with spaces replaced by hyphens
 */
export const stringToKebabCase = (id: string) =>
  id
    .toLowerCase()
    .replace(/[^A-Za-z0-9 ]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const gradientBackgrounds = {
  blackSplit: 'linear-gradient(0deg, #000000 50%, transparent 50%)',
  blueSplit: 'linear-gradient(0deg, #397DCB 50%, transparent 50%)',
  darkGradient:
    'linear-gradient(180deg, #070624 -17.19%, rgba(7, 6, 36, 0) 111.4%), linear-gradient(86.97deg, rgba(255, 168, 0, 0.4) -0.67%, rgba(25, 187, 125, 0.4) 24.91%, rgba(0, 82, 204, 0.4) 48.82%, rgba(69, 164, 236, 0.4) 72.18%, rgba(184, 95, 255, 0.4) 88.31%), #070624;',
  darkSplit:
    'linear-gradient(180deg, #070624 -17.19%, rgba(7, 6, 36, 0) 111.4%) top/100% 60% no-repeat, linear-gradient(86.97deg, rgba(255, 168, 0, 0.4) -0.67%, rgba(25, 187, 125, 0.4) 24.91%, rgba(0, 82, 204, 0.4) 48.82%, rgba(69, 164, 236, 0.4) 72.18%, rgba(184, 95, 255, 0.4) 88.31%) top/100% 60% no-repeat, linear-gradient(0deg, transparent 40%, #070624 40%)',
};

/**
 * @param typename component content type, @param name the name of the background selected in CMS, @param width the width of the page
 * @returns `backgroundPath`: a file path corresponding to the appropriate static image, `backgroundIsDark`: boolean for making text white if background is dark
 */
export const getBackground = (typename = '', name: string | null = 'White', width: number) => {
  if (!typename || !name || name === 'White') {
    return {
      backgroundPath: undefined,
      backgroundIsDark: false,
    };
  }

  const darkBackgrounds = ['darkPattern', 'rainbow', 'darkGradient', 'darkSplit'];
  const camelCasedName = toCamelCase(name);
  const backgroundIsDark = darkBackgrounds.some(darkBackground => camelCasedName.includes(darkBackground));
  const backgroundGradient = keyExistsOnObject(gradientBackgrounds, camelCasedName)
    ? gradientBackgrounds[camelCasedName]
    : undefined;
  if (backgroundGradient) {
    return {
      backgroundPath: undefined,
      backgroundGradient,
      backgroundIsDark,
    };
  }

  if (doesArrayContainItem(colorListArray, camelCasedName)) {
    return {
      backgroundColor: camelCasedName,
      backgroundPath: undefined,
      backgroundGradient,
      backgroundIsDark,
    };
  }
  const simplifiedType = typename.replace('Component', '');
  const componentName = `${simplifiedType.charAt(0).toLowerCase()}${simplifiedType.slice(1)}`;
  const backgroundName = `${name.charAt(0).toUpperCase()}${camelCasedName.slice(1)}`;
  const backgroundWidth = [375, 992, 1700, 1920].find(possibleSize => possibleSize > width) || 1920;

  const backgroundPath = `/backgrounds/${componentName}${backgroundName}${backgroundWidth}.webp`;

  return {
    backgroundPath,
    backgroundIsDark,
  };
};

/**
 * @param value any string
 * @returns if string is valid gradient atom, returns `gradient`. if not, `url(inputString)`
 */
export const parseBackgroundGradient = (value = '') => {
  const gradientName = value.split('-')[1];

  return keyExistsOnObject(gradient, gradientName) ? gradient[gradientName] : `url(${value})`;
};

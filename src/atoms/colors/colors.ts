import { DefaultTheme } from 'styled-components';

import { objectEntries, valueof } from 'utils/typeUtils';

const color = {
  common: { white: '#fff', black: '#000', transparent: 'transparent' },
  primary: {
    25: '#F8F1FE',
    50: '#F2E6FB',
    100: '#DBC2F6',
    200: '#C399F0',
    300: '#AB6CEB',
    400: '#9846E6',
    500: '#8512E0',
    600: '#7909DA',
    700: '#6A00D1',
    800: '#5B00CC',
    900: '#4200C4',
  },
  gray: {
    25: '#F7F7F7',
    50: '#EBEFF2',
    100: '#CDCFD2',
    200: '#ACAFB7',
    300: '#8B909C',
    400: '#747A89',
    500: '#5D6476',
    600: '#505766',
    700: '#3F4551',
    800: '#2F333C',
    900: '#1D2026',
  },
  primaryGreen: {
    25: '#F6FEF9',
    50: '#E3F6EA',
    100: '#BAE8CC',
    200: '#8BD9AB',
    300: '#53CB89',
    400: '#00BF6F',
    500: '#00B356',
    600: '#00A44C',
    700: '#00923F',
    800: '#008033',
    900: '#00611F',
  },
  primaryOrange: {
    25: '#FFFCF5',
    50: '#FFF3DE',
    100: '#FFE0AE',
    200: '#FFCB78',
    300: '#FFB600',
    400: '#FFA400',
    500: '#FF9600',
    600: '#FC8A00',
    700: '#F77900',
    800: '#FF6720',
    900: '#D14300',
  },
  primaryBlue: {
    25: '#F4FBFF',
    50: '#E5F3FC',
    100: '#C0E0F9',
    200: '#99CEF6',
    300: '#75BAF1',
    400: '#5BABEF',
    500: '#489EEC',
    600: '#418FDE',
    700: '#397DCB',
    800: '#336DB9',
    900: '#284F99',
  },
  limeGreen: {
    25: '#FAFF3',
    50: '#F3FAE9',
    100: '#E0F1C7',
    200: '#CBE7A3',
    300: '#B6DE7D',
    400: '#A4D65E',
    500: '#94CE3F',
    600: '#84BE37',
    700: '#6EAA2D',
    800: '#5A9623',
    900: '#357312',
  },
  turqoise: {
    25: '#F0FCFF',
    50: '#DCF3FA',
    100: '#A7DFF2',
    200: '#69CAEA',
    300: '#00B5E2',
    400: '#00A6DF',
    500: '#0097DC',
    600: '#008ACE',
    700: '#0078BC',
    800: '#0067A9',
    900: '#00498A',
  },
  lightBlue: {
    25: '#F3FCFF',
    50: '#E2F4FA',
    100: '#B6E4F1',
    200: '#74D3E7',
    300: '#62C1DA',
    400: '#48B5D2',
    500: '#3BA9C9',
    600: '#369AB6',
    700: '#2F869D',
    800: '#277385',
    900: '#1A515A',
  },
  red: {
    25: '#FFF5F7',
    50: '#FCE9ED',
    100: '#F8C7D1',
    200: '#E49098',
    300: '#D76571',
    400: '#E03E52',
    500: '#E42138',
    600: '#D51537',
    700: '#C30431',
    800: '#B6002A',
    900: '#A8001E',
  },
} as const;

export const gradient = {
  darkRainbow:
    'linear-gradient(180deg, #070624 -17.19%, rgba(7, 6, 36, 0) 111.4%), linear-gradient(86.97deg, rgba(255, 168, 0, 0.4) -0.67%, rgba(25, 187, 125, 0.4) 24.91%, rgba(0, 82, 204, 0.4) 48.82%, rgba(69, 164, 236, 0.4) 72.18%, rgba(184, 95, 255, 0.4) 88.31%), #070624',
  lightRainbow: 'linear-gradient(90.05deg, #B5FFD3 0.02%, #D1A4FF 39.16%, #FFA5AF 75.82%, #FFDCA4 112%)',
  darkRainbowText: 'linear-gradient(89.24deg, #8512E0 57.52%, #D300BE 103.1%)',
  rainbowHover:
    'conic-gradient(from 83.41deg at 50.24% 50.24%, #25C16F -36.7deg, #EFC75E 13.28deg, #FF9C23 57.71deg, #FF492C 98.29deg, #BD63C4 135.43deg, #8512E0 172.9deg, #45A4EC 207.19deg, #59F1F5 244.06deg, #25C16F 291.15deg, #25C16F 323.3deg, #EFC75E 373.28deg)',
} as const;

export type GradientStyles = keyof typeof gradient;
type GetGradientList<T extends string> = `gradient-${T}`;
export type GradientList = GetGradientList<GradientStyles>;

export type ColorObject = typeof color;

type GetColorOptions<T> = {
  readonly [P in keyof T]: keyof T[P];
};

export type ColorOptions = GetColorOptions<ColorObject>;

type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}-${keyof T[P] extends string | number
    ? keyof T[P]
    : never}`;
}[keyof T];

export type ColorList = GetColorList<ColorObject>;
export type ColorDefinition = keyof ColorObject;
export const colorListArray = objectEntries(color)
  .map(([colorName, colorValues]) => Object.keys(colorValues).map(value => `${colorName}-${value}`))
  .flat() as ColorList[];

export interface LightAndDark {
  light: ColorList;
  dark: ColorList;
}

type Common = ColorOptions['common'];
type Others = valueof<Omit<ColorOptions, 'common'>>;
type ColorArray = [ColorDefinition, Common | Others];

export type GetColorDefinition = ColorList | LightAndDark;

export const getColor = (palette: DefaultTheme['palette'], colors: GetColorDefinition) => {
  if (!colors) {
    return;
  }
  const [colorKey, colorValue] =
    typeof colors === 'string' ? (colors.split('-') as ColorArray) : (colors[palette.mode].split('-') as ColorArray);
  const subPalette = palette[colorKey];

  return 'white' in subPalette ? subPalette[colorValue as Common] : subPalette[colorValue as Others];
};

export default color;

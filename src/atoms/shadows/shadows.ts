/* eslint-disable @typescript-eslint/ban-types */
import { DefaultTheme } from 'styled-components';

const shadow = {
  xs: '0px 1px 2px rgba(37, 49, 56, 0.05)',
  sm: '0px 1px 3px rgba(37, 49, 56, 0.1), 0px 1px 2px rgba(37, 49, 56, 0.06)',
  md: '0px 4px 8px -2px rgba(37, 49, 56, 0.1), 0px 2px 4px -2px rgba(37, 49, 56, 0.06)',
  lg: '0px 12px 16px -4px rgba(37, 49, 56, 0.08), 0px 4px 6px -2px rgba(37, 49, 56, 0.03)',
  xl: '0px 20px 24px -4px rgba(37, 49, 56, 0.08), 0px 8px 8px -4px rgba(37, 49, 56, 0.03)',
  xxl: '0px 24px 48px -12px rgba(37, 49, 56, 0.18)',
  xxxl: '0px 32px 64px -12px rgba(37, 49, 56, 0.14)',
} as const;

type ShadowKeys = keyof typeof shadow;
interface ShadowLightDark {
  light: ShadowKeys | (string & {});
  dark: ShadowKeys | (string & {});
}

export type ShadowDefinition = ShadowKeys | ShadowLightDark | (string & {});

const parseInputString = (string: string) => {
  if (Object.keys(shadow).includes(string)) {
    return shadow[string as ShadowKeys];
  }

  return string;
};

export const parseShadow = (palette: DefaultTheme['palette'], input: ShadowDefinition) => {
  if (!input) {
    return;
  }
  if (typeof input === 'object') {
    return parseInputString(input[palette.mode]);
  }

  return parseInputString(input);
};

export default shadow;

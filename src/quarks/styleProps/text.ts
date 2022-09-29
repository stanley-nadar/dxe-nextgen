import { css } from 'styled-components';

import { GradientStyles, gradient } from 'atoms/colors/colors';
import { font } from 'atoms/typography/typography';

type TextStyles = keyof typeof font.text;

const textCSS = {
  /**
   * Element's `font` shorthand property. Only accepts values set in the `text` typography atom.
   * Ex: `xs`, `sm`, etc.
   */
  textStyle: (value: TextStyles) => {
    const fontStyles = font.text[value];

    return css`
      font: ${fontStyles.font()};
      ${'letterSpacing' in fontStyles && `letter-spacing: ${fontStyles.letterSpacing}`};
      ${'textTransform' in fontStyles && `text-transform: ${fontStyles.textTransform}`};
    `;
  },
  /**
   * Adds a gradient to the text. Uses predefined gradients from the color atom.
   */
  gradient: (value: GradientStyles) => css`
    background: ${gradient[value]};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
};

export default textCSS;

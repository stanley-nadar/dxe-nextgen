import { css } from 'styled-components';

import { font } from 'atoms/typography/typography';

import typography from 'theme/typography';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextStyles = keyof typeof font.display;

const headingCSS = {
  /**
   * Element's `font` shorthand property. Only accepts values set in the `display` typography atom.
   * Ex: `xs`, `sm`, etc.
   */
  textStyle: (value: TextStyles) => {
    const fontStyles = font.display[value];

    return css`
      font: ${fontStyles.font()};
      letter-spacing: ${fontStyles.letterSpacing};
    `;
  },
  /**
   * The heading's element type. Options are `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.
   * The element will automatically be styled accordingly as defined in the typography atom.
   */
  as: (value: HeadingTypes) => {
    const headingStyle = typography.typography[value];

    return css`
      font-size: ${headingStyle.fontSize};
      line-height: ${headingStyle.lineHeight};
      letter-spacing: ${headingStyle.letterSpacing};
      font-weight: ${headingStyle.fontWeight};
    `;
  },
};

export default headingCSS;

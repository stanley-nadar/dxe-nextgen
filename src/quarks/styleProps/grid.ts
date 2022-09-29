import { Properties } from 'csstype';
import { css } from 'styled-components';

const gridCSS = {
  /**
   * Element's `gap` value. Accepts any valid size
   */
  gap: (value: Properties['gap']) => css`
    gap: ${value};
  `,
  /**
   * Element's `column-gap` value. Accepts any valid size
   */
  columnGap: (value: Properties['columnGap']) => css`
    column-gap: ${value};
  `,
  /**
   * Element's `row-gap` value. Accepts any valid size
   */
  rowGap: (value: Properties['rowGap']) => css`
    row-gap: ${value};
  `,
  /**
   * Element's `grid` shorthand property.
   */
  grid: (value: Properties['grid']) => css`
    grid: ${value};
  `,
  /**
   * Element's `grid-area` value.
   */
  gridArea: (value: Properties['gridArea']) => css`
    grid-area: ${value};
  `,
  /**
   * Element's `grid-auto-columns` value.
   */
  gridAutoColumns: (value: Properties['gridAutoColumns']) => css`
    grid-auto-columns: ${value};
  `,
  /**
   * Element's `grid-auto-flow` value.
   */
  gridAutoFlow: (value: Properties['gridAutoFlow']) => css`
    grid-auto-flow: ${value};
  `,
  /**
   * Element's `grid-auto-rows` value.
   */
  gridAutoRows: (value: Properties['gridAutoRows']) => css`
    grid-auto-rows: ${value};
  `,
  /**
   * Element's `grid-column` value.
   */
  gridColumn: (value: Properties['gridColumn']) => css`
    grid-column: ${value};
  `,
  /**
   * Element's `grid-column-start` value.
   */
  gridColumnStart: (value: Properties['gridColumnStart']) => css`
    grid-column-start: ${value};
  `,
  /**
   * Element's `grid-column-end` value.
   */
  gridColumnEnd: (value: Properties['gridColumnEnd']) => css`
    grid-column-end: ${value};
  `,
  /**
   * Element's `grid-row-start` value.
   */
  gridRowStart: (value: Properties['gridRowStart']) => css`
    grid-row-start: ${value};
  `,
  /**
   * Element's `grid-row-end` value.
   */
  gridRowEnd: (value: Properties['gridRowEnd']) => css`
    grid-row-end: ${value};
  `,
  /**
   * Element's `grid-template` value.
   */
  gridTemplate: (value: Properties['gridTemplate']) => css`
    grid-template: ${value};
  `,
  /**
   * Element's `grid-template-areas` value.
   */
  gridTemplateAreas: (value: Properties['gridTemplateAreas']) => css`
    grid-template-areas: ${value};
  `,
  /**
   * Element's `grid-template-columns` value.
   */
  gridTemplateColumns: (value: Properties['gridTemplateColumns']) => css`
    grid-template-columns: ${value};
  `,
  /**
   * Element's `grid-template-rows` value.
   */
  gridTemplateRows: (value: Properties['gridTemplateRows']) => css`
    grid-template-rows: ${value};
  `,
  /**
   * The CSS `place-items` shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.
   */
  placeItems: (value: Properties['placeItems']) => css`
    place-items: ${value};
  `,
};

export default gridCSS;

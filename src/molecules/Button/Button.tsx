import MUIButton from '@mui/material/Button';
import NextLink from 'next/link';
import { FC, MouseEvent, ReactNode } from 'react';
import { ArrowRight, ChevronRight, Icon } from 'react-feather';
import styled from 'styled-components';

import { gradient } from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import { FlexProps, flex } from 'quarks/interpolations/flex';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import parseUrl from 'utils/parseUrl';

const StyledButton = styled(MUIButton).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  &&& {
    ${flex}
  }
`;

export interface ButtonProps extends FlexProps {
  /**
   * If true, button will have a rainbow border hover effect (only if variant is `outlined`)
   */
  rainbowHover?: boolean | null;
  /**
   * Pass the label as a child. Works with a string or icon.
   */
  children: ReactNode;
  /**
   * ReactNode of icon to be put at the end of the button
   */
  endIcon?: ReactNode;
  /**
   * ReactNode of icon to be put at the beginning of the button
   */
  startIcon?: ReactNode;
  /**
   * Choose the horizontal size of the icon, with height set automatically. Takes any valid CSS width.
   */
  iconSize?: string;
  /**
   * Determines between an outlined, text, or contained button
   */
  variant?: 'contained' | 'text' | 'outlined';
  /**
   * The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * If `true`, the button is disabled.
   */
  disabled?: boolean;
  /**
   * Defines the tab index of the button
   */
  tabIndex?: number;
  /**
   * The default behavior of the button
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * The size of the component.
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  /**
   * Callback fired when the button is clicked. Also fires on `space bar` and `enter` key presses when focused.
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string).
   */
  onClick?: (event: MouseEvent) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  endIcon,
  startIcon,
  href,
  iconSize,
  variant,
  size,
  tabIndex,
  rainbowHover,
  ...props
}) => {
  const { isInternal, ...urlProps } = parseUrl(href || '');

  // eslint-disable-next-line
  // @ts-ignore
  const isChevronRight = (endIcon?.type as Icon) === ChevronRight;

  const borderWidth = '2px';
  const rainbowHoverCss = `:hover {
    :before {
      content: "";
      position: absolute;
      top: -${borderWidth};
      left: -${borderWidth};
      right: -${borderWidth};
      bottom: -${borderWidth};
      border-radius: 6px;
      border: ${borderWidth} solid transparent;
      background: ${gradient.rainbowHover} border-box;
      -webkit-mask:
        linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude; 
      animation: fadeIn 0.2s ease-in;
      @keyframes fadeIn {
        0% {
          opacity: .25;
        }
        50% {
          opacity: .5;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }`;

  const animatedChevron = `
    svg {
      line {
        opacity: 0;
        transform: translateX(-3px);
        transition: opacity 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      polyline {
        transform: translateX(-6px);
        transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
    :hover, :focus {
      svg {
        line {
          opacity: 1;
        }
        polyline {
          transform: none;
        }
      }
    }
  `;

  const RenderedButton = () => (
    <StyledButton
      {...urlProps}
      variant={variant}
      tabIndex={tabIndex}
      disableRipple={true}
      textDecoration="none"
      transition="border 0s linear"
      startIcon={
        startIcon && (
          <Flex width={iconSize} alignItems="center">
            {startIcon}
          </Flex>
        )
      }
      size={size}
      endIcon={
        endIcon && (
          <Flex width={iconSize} alignItems="center">
            {isChevronRight ? <ArrowRight /> : endIcon}
          </Flex>
        )
      }
      css={`
        &&& {
          ${rainbowHover && variant === 'outlined' && rainbowHoverCss}
          ${isChevronRight && animatedChevron}
        }
      `}
      {...props}
    >
      {children}
    </StyledButton>
  );

  return isInternal ? (
    <NextLink href={href || ''} passHref>
      <RenderedButton />
    </NextLink>
  ) : (
    <RenderedButton />
  );
};
export default Button;

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  width: 'fit-content',
  justifyContent: 'center',
  iconSize: 'fit-content',
};

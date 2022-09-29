import { IconButton as IButton } from '@mui/material';
import { FC, KeyboardEventHandler, MouseEventHandler, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

import color from 'atoms/colors/colors';

import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

interface ArrowButtonProps extends BasicProps {
  /**
   * The tab index number
   */
  tabIndex?: number;
  /**
   * The child node.
   */
  children: ReactNode;
  /**
   * Callback function fired on Keyboard `onKeyDown` event.
   */
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  /**
   * Callback function fired on Mouse `onClick` event.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledIconButton = styled(IButton).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

const IconButton: FC<ArrowButtonProps> = forwardRef(({ children, onKeyDown, onClick, ...props }, ref) => (
  <StyledIconButton
    disableRipple
    paddingAll={0}
    onKeyDown={onKeyDown}
    onClick={onClick}
    focusVisible={{ outline: `2px solid ${color.primaryBlue[700]}` }}
    {...ref}
    {...props}
  >
    {children}
  </StyledIconButton>
));

export default IconButton;

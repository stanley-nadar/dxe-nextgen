import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ChevronLeft, ChevronRight } from 'react-feather';

import Button, { ButtonProps } from 'molecules/Button/Button';

import SpinnerIcon from 'components/Button/SpinnerIcon';
import themeHierarchy, { HierarchyDefinition } from 'components/Button/buttonThemeHierarchy';

import { toCamelCase } from 'utils/functions';

import type { IComponentButton, ISys } from 'graphql/types';
import type { FC } from 'react';

const getIcon = (icon?: string | null) => {
  switch (icon) {
    case '←':
      return <ArrowLeft />;
    case '→':
      return <ArrowRight />;
    case '↑':
      return <ArrowUp />;
    case '↓':
      return <ArrowDown />;
    case '<':
      return <ChevronLeft />;
    case '>':
      return <ChevronRight />;
    case 'progress':
      return <SpinnerIcon />;
    default:
      return null;
  }
};

const getIconOnlyButtonPadding = (size?: string) => {
  switch (size) {
    case 'small':
      return '10px';
    case 'medium':
      return '12px';
    case 'large':
      return '14px';
    case 'xlarge':
      return '16px';
    case 'xxlarge':
      return '18px';
    default:
      return undefined;
  }
};

interface ComponentButtonProps
  extends Omit<IComponentButton, 'contentfulMeta' | 'contentfulMetadata' | 'sys'>,
    Omit<ButtonProps, 'children' | 'endIcon' | 'startIcon' | 'size'> {
  sys?: ISys;
  tabIndex?: number;
  isDark?: boolean;
}

const ComponentButton: FC<ComponentButtonProps> = ({
  label,
  labelIcon,
  link,
  disabled,
  hierarchy,
  startIcon,
  endIcon,
  size,
  rainbowHover,
  isDark,
  // desctructure these props to prevent them from being set as DOM element attributes
  /* eslint-disable @typescript-eslint/no-unused-vars */
  __typename,
  internalName,
  sys,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}) => {
  const addDarkLabelToHierarchy = isDark ? `${hierarchy} Dark` : hierarchy;
  const buttonTheme = themeHierarchy[toCamelCase(addDarkLabelToHierarchy || 'Primary Color') as HierarchyDefinition];
  const href = disabled ? '' : link;
  const iconOnlyFontSize = size?.toLowerCase() === 'xlarge' ? 20 : 18;
  const hierachyListToRemovePadding = ['Link Color', 'Link Gray'];

  return (
    <Button
      paddingLeft={hierachyListToRemovePadding?.includes(hierarchy || '') ? 0 : undefined}
      href={href ? href : undefined}
      variant={buttonTheme.variant as ButtonProps['variant']}
      startIcon={startIcon ? getIcon(startIcon) : undefined}
      endIcon={endIcon ? getIcon(endIcon) : undefined}
      size={size?.toLowerCase() as ButtonProps['size']}
      backgroundColor={disabled ? buttonTheme.disabledBg : buttonTheme.bg}
      textColor={disabled ? buttonTheme.disabledText : buttonTheme.text}
      borderColor={disabled ? buttonTheme.disabledBorder : buttonTheme.border}
      border={buttonTheme.variant === 'outlined' ? '2px solid' : ''}
      boxShadow="none"
      rainbowHover={rainbowHover}
      aria-label={labelIcon ? labelIcon : label}
      hover={
        !rainbowHover
          ? {
              backgroundColor: buttonTheme.hoverBg,
              textColor: buttonTheme.hoverText,
            }
          : undefined
      }
      focus={{
        boxShadow: `0 1 2 0 ${buttonTheme.focusShadow}`,
        outlineColor: buttonTheme.focusBorder,
      }}
      disabled={disabled}
      fontSize={labelIcon ? iconOnlyFontSize : undefined}
      css={`
        && {
          padding: ${labelIcon ? getIconOnlyButtonPadding(size?.toLowerCase()) : undefined};
        }
      `}
      {...props}
    >
      {labelIcon ? getIcon(labelIcon) : label}
    </Button>
  );
};

export default ComponentButton;

ComponentButton.defaultProps = {
  label: '',
  labelIcon: '',
  link: '',
  disabled: false,
  hierarchy: 'Primary Color',
  startIcon: '',
  endIcon: '',
  size: 'medium',
};

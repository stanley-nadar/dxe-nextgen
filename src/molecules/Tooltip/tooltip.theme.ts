import color from 'atoms/colors/colors';
import shadows from 'atoms/shadows/shadows';
import { padding } from 'atoms/spacing/spacing';
import { fontSize, fontWeight } from 'atoms/typography/typography';

const tooltipRoot = {
  fontSize: fontSize[12],
  fontWeight: fontWeight.regular,
  borderRadius: 8,
  boxShadow: shadows.xl,
  paddingLeft: padding[12],
  paddingRight: padding[12],
};

export const darkTooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: color.common.white,
        color: color.gray[700],
        ...tooltipRoot,
      },
      arrow: {
        color: color.common.white,
      },
    },
  },
};

export const lightTooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: color.primaryBlue[700],
        color: color.common.white,
        ...tooltipRoot,
      },
      arrow: {
        color: color.primaryBlue[700],
      },
    },
  },
};

import { FC } from 'react';

import { BasicProps } from 'quarks/interpolations/basic';

import Badge from 'molecules/Badge/Badge';

interface ChipProps extends BasicProps {
  /**
   * The label is a string of characters to be displayed within the chip
   */
  label?: string;
  /**
   * Takes 1 of 7 preset color variations
   */
  color?: ChipColors;
}

export const colorMap = {
  gray: {
    backgroundColor: 'gray-50',
    textColor: 'gray-700',
  },
  limeGreen: {
    backgroundColor: 'limeGreen-50',
    textColor: 'limeGreen-900',
  },
  turqoise: {
    backgroundColor: 'turqoise-50',
    textColor: 'turqoise-700',
  },
  primaryOrange: {
    backgroundColor: 'primaryOrange-50',
    textColor: 'primaryOrange-900',
  },
  primaryGreen: {
    backgroundColor: 'primaryGreen-50',
    textColor: 'primaryGreen-800',
  },
  primaryBlue: {
    backgroundColor: 'primaryBlue-50',
    textColor: 'primaryBlue-900',
  },
  red: {
    backgroundColor: 'red-25',
    textColor: 'primaryOrange-900',
  },
} as const;
export type ChipColors = keyof typeof colorMap;

const Chip: FC<ChipProps> = ({ label, color = 'gray', ...props }) => (
  <Badge
    size="md"
    fontSize={16}
    borderRadius="20px"
    textTransform="capitalize"
    textColor={colorMap[color].textColor}
    backgroundColor={colorMap[color].backgroundColor}
    {...props}
  >
    {label}
  </Badge>
);

export default Chip;

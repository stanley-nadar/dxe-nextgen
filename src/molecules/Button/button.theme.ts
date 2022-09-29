import color from 'atoms/colors/colors';
import shadow from 'atoms/shadows/shadows';
import { padding } from 'atoms/spacing/spacing';
import { fontWeight } from 'atoms/typography/typography';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xlarge: true;
    xxlarge: true;
  }
}

const themeOverrides = {
  root: {
    minWidth: 0,
    textTransform: 'capitalize',
    fontWeight: fontWeight.black,
    borderRadius: '6px',
    fontSize: '1rem',
    paddingLeft: padding[24],
    paddingRight: padding[24],
    boxShadow: shadow.xs,
    '&:focus': {
      outline: '4px solid',
    },
  },
};

const sizeVariants = [
  {
    props: { size: 'small' },
    style: {
      lineheight: '24px',
      paddingTop: padding[8],
      paddingBottom: padding[8],
    },
  },
  {
    props: { size: 'medium' },
    style: {
      lineHeight: '24px',
      paddingTop: padding[10],
      paddingBottom: padding[10],
    },
  },
  {
    props: { size: 'large' },
    style: {
      fontSize: '1.125rem',
      lineHeight: '28px',
      paddingTop: padding[10],
      paddingBottom: padding[10],
    },
  },
  {
    props: { size: 'xlarge' },
    style: {
      fontSize: '1.125rem',
      lineHeight: '28px',
      paddingTop: padding[16],
      paddingBottom: padding[16],
    },
  },
  {
    props: { size: 'xxlarge' },
    style: {
      fontSize: '1.25rem',
      lineHeight: '30px',
      paddingTop: padding[15],
      paddingBottom: padding[15],
    },
  },
];

export const lightButton = {
  MuiButton: {
    styleOverrides: themeOverrides,
    variants: [
      ...sizeVariants,
      {
        props: { variant: 'contained' },
        style: {
          backgroundColor: color.primary[600],
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          color: color.primary[500],
          borderColor: color.primary[500],
        },
      },
      {
        props: { variant: 'text' },
        style: {
          color: color.primary[600],
        },
      },
    ],
  },
};

export const darkButton = {
  MuiButton: {
    styleOverrides: themeOverrides,
    variants: [
      ...sizeVariants,
      {
        props: { variant: 'contained' },
        style: {
          backgroundColor: color.primary[600],
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          color: color.primary[500],
          borderColor: color.primary[500],
        },
      },
      {
        props: { variant: 'text' },
        style: {
          color: color.primary[600],
        },
      },
    ],
  },
};

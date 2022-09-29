import color from 'atoms/colors/colors';
import shadow from 'atoms/shadows/shadows';
import { fontSize } from 'atoms/typography/typography';

const helperTextStyles = {
  fontSize: fontSize[14],
  marginLeft: 0,
  letterSpacing: '0.3px',
};

const inputRootStyles = {
  minWidth: 181,
  minHeight: 48,
  borderRadius: 8,
};

export const lightTextField = {
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: color.gray[500],
        ...helperTextStyles,
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: color.gray[300],
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: color.gray[800],
        '&.Mui-focused': {
          color: color.gray[800],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        ...inputRootStyles,
        backgroundColor: color.common.white,
        border: `1px solid ${color.gray[100]}`,
      },
      '&.Mui-focused': {
        border: `1px solid ${color.primaryBlue[600]}`,
        boxShadow: `${shadow.lg}`,
        backgroundColor: color.common.white,
      },
    },
  },
};
export const darkTextField = {
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: color.gray[500],
        ...helperTextStyles,
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: color.gray[400],
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: color.gray[800],
        '&.Mui-focused': {
          color: color.gray[800],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        ...inputRootStyles,
        backgroundColor: color.common.white,
        border: `1px solid ${color.gray[200]}`,
        '&:hover': {
          backgroundColor: color.common.white,
        },
        '&.Mui-focused': {
          border: `1px solid ${color.primaryBlue[600]}`,
          boxShadow: `${shadow.lg}`,
          backgroundColor: color.common.white,
        },
      },
    },
  },
};

export default lightTextField;

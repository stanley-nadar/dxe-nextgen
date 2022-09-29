import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';
import { FC, ReactNode, useState } from 'react';
import { ChevronDown } from 'react-feather';
import styled from 'styled-components';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import { menuProps } from 'molecules/Select/Select.theme';

const StyledFormControl = styled(FormControl).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

const StyledSelect = styled(MUISelect).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

interface SelectProps extends BasicProps {
  /**
   * Items set inside `list` as an array will appear inside the `Select` dropdown.
   */
  list: ReactNode[];
  /**
   * This sets the `placeholderText` that appears inside `Select` as placeholder text.
   */
  placeholderText?: string;
  /**
   * The name that appears above `Select`.
   */
  label?: string;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: string;
  /**
   * The `icon` that appears to the left of ALL menu items in the dropdown and `select` window.
   * To set a custom icon for each item, pass a mapped array of JSX element to `children`.
   */
  itemIcon?: ReactNode;
  /**
   * Sets the size of the `itemIcon`. Can be set with a `px` or `rem` value.
   */
  iconSize?: string;
  /**
   * The `icon` that appears in the `select` window. Follows the rules set in the `Icon` atom.
   */
  startIcon?: ReactNode;
  /**
   * Callback fired when a menu item is selected.
   */
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  list,
  placeholderText,
  defaultValue,
  label,
  fontSize,
  fontWeight,
  itemIcon,
  iconSize,
  startIcon,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const targetValue = event.target.value;
    setValue(targetValue as string);
    onChange(targetValue as string);
  };

  return (
    <StyledFormControl {...props}>
      <Text fontSize={fontSize} fontWeight={fontWeight} textColor={{ light: 'gray-700', dark: 'gray-200' }}>
        {label}
      </Text>
      <StyledSelect
        value={value}
        displayEmpty={true}
        MenuProps={menuProps}
        borderRadius="8px"
        IconComponent={ChevronDown}
        startAdornment={startIcon}
        onChange={handleChange}
      >
        <MenuItem value="">
          <Flex textColor={{ light: 'gray-500', dark: 'gray-400' }}>{placeholderText}</Flex>
        </MenuItem>
        {list.map((item, index) => {
          const itemValue = typeof item === 'string' ? item : index;

          return (
            <MenuItem key={itemValue} value={itemValue}>
              <Flex alignItems="center">
                {itemIcon && (
                  <Flex marginRight={8} width={iconSize}>
                    {itemIcon}
                  </Flex>
                )}
                {item}
              </Flex>
            </MenuItem>
          );
        })}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default Select;

Select.defaultProps = {
  minWidth: '320px',
  fontSize: 14,
  fontWeight: 'semiBold',
  onChange: () => null,
};

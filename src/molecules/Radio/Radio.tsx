import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';
import { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';

import Text from 'quarks/Text';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

const StyledFormControl = styled(FormControlLabel).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

interface RadioProps extends BasicProps {
  /**
   * Text label of the Radio button
   */
  label?: string;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Determines the size of the `Radio`
   */
  size?: 'large' | 'small';
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component is required.
   */
  required?: boolean;
  /**
   * displays text under the label to assist the user
   */
  helperText?: string;
  /**
   * Callback fired when the state is changed.
   * **Signature:**
   * `function(event: React.ChangeEvent<HTMLInputElement>) => void`
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string). You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: SyntheticEvent<Element, Event>, checked: boolean) => void;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value?: string | boolean;
}

const Radio: FC<RadioProps> = ({ label, size, checked, required, value, helperText, id, disabled, ...props }) => {
  const labelComponent = (
    <>
      <Text fontSize={size === 'small' ? 14 : 16} fontWeight="semiBold">
        {label}
      </Text>
      {helperText && (
        <Text display="block" textStyle="sm" textColor={{ light: 'gray-500', dark: 'gray-300' }}>
          {helperText}
        </Text>
      )}
    </>
  );

  return (
    <StyledFormControl
      control={<MuiRadio size={size} required={required} />}
      disabled={disabled}
      checked={checked}
      id={id}
      value={value}
      label={labelComponent}
      {...props}
    />
  );
};

Radio.defaultProps = {
  label: '',
  size: 'small',
};

export default Radio;

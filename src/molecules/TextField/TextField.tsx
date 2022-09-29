import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';
import { ChangeEventHandler, FC, MouseEventHandler, ReactNode } from 'react';
import { Globe, HelpCircle, Mail, Phone } from 'react-feather';
import styled from 'styled-components';

import { BasicProps, basic } from 'quarks/interpolations/basic';

import Tooltip, { TooltipProps } from 'molecules/Tooltip/Tooltip';

const StyledField = styled(MuiTextField)`
  && {
    ${basic}
  }
`;

export const getIcon = (icon?: string | null) => {
  switch (icon) {
    case 'Email':
      return <Mail />;
    case 'Help':
      return <HelpCircle />;
    case 'Website':
      return <Globe />;
    case 'Phone':
      return <Phone />;
    default:
      return null;
  }
};

export const getType = (type: string) => {
  switch (type) {
    case 'Email':
      return 'email';
    case 'Phone':
      return 'tel';
    case 'Website':
      return 'url';
    default:
      return '';
  }
};

export interface TextFieldProps extends BasicProps {
  /**
   * Defines the icon to be used at the start of the TextField.
   */
  startIcon?: ReactNode;
  /**
   * Defines the icon to be used at the end of the TextField.
   */
  endIcon?: ReactNode;
  /**
   * The label content.
   */
  label?: string;
  /**
   * 	The short hint displayed in the `TextField` before the user enters a value.
   */
  placeholder?: string;
  /**
   * Name attribute of the `TextField` element.
   */
  name?: string;
  /**
   * Defines a string of text located under the TextField to assist the user with the TextField functionality.
   */
  helperText?: string;
  /**
   * Callback fired when the endIcon is clicked.
   *  **Signature:**
   *  `function(event: object) => void`
   */
  onEndIconClick?: MouseEventHandler<HTMLDivElement> | undefined;
  /**
   * 	Callback fired when the value is changed.
   *  **Signature:**
   *  `function(event: object) => void`
   *  event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  /**
   * Defines the type of text TextField or a number TextField
   */
  type: 'email' | 'tel' | 'url' | 'number' | 'password';
  /**
   * 	If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   */
  error?: boolean;
  /**
   * If `true`, the label is displayed as required and the `TextField` element is required.
   */
  required?: boolean;
  /**
   * The id of the `TextField` element. Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id?: string;
  /**
   * The value of the `TextField` element, required for a controlled component.
   */
  value?: string | boolean;
  /**
   * String that displays the title of a tooltip on the `endIcon`.
   */
  tooltip?: TooltipProps['title'];
  /**
   * Tooltip placement in regards to the endIcon. Default `top`
   */
  tooltipPlacement?: TooltipProps['placement'];
  /**
   * Rendered below the title. Used when more than a single line or phrase is needed in the tooltip.
   */
  tooltipDescription?: TooltipProps['description'];
}

const TextField: FC<TextFieldProps> = ({
  startIcon,
  endIcon,
  tooltip,
  tooltipPlacement,
  tooltipDescription,
  onEndIconClick,
  ...props
}) => (
  <StyledField
    InputProps={{
      startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
      endAdornment:
        endIcon && tooltip ? (
          <Tooltip title={tooltip} placement={tooltipPlacement} description={tooltipDescription}>
            <InputAdornment position="start" variant="outlined" onClick={onEndIconClick} css="cursor: pointer">
              {endIcon}
            </InputAdornment>
          </Tooltip>
        ) : (
          <InputAdornment position="start" variant="outlined" onClick={onEndIconClick} css="cursor: pointer">
            {endIcon}
          </InputAdornment>
        ),
      disableUnderline: true,
    }}
    {...props}
  />
);

export default TextField;

TextField.defaultProps = {
  type: 'email',
};

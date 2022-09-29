import { TextareaAutosize } from '@mui/base';
import { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

const StyledTextArea = styled(TextareaAutosize).withConfig({
  shouldForwardProp: prop => ![...Object.keys(allCSSWithPseudos), 'helperText'].includes(prop),
})`
  & {
    ${basic}
  }
`;

const StyledLabel = styled.label`
  & {
    ${basic}
  }
`;

interface TextAreaProps extends BasicProps {
  /**
   * Text label in the top left
   */
  label?: string;
  /**
   * Displays text under the TextArea to assist the user
   */
  helperText?: string;
  /**
   * 	The short hint displayed in the `TextArea` before the user enters a value.
   */
  placeholder?: string;
  /**
   * Name attribute of the `TextArea` element.
   */
  name?: string;
  /**
   * 	Callback fired when the value is changed.
   *  **Signature:**
   *  `function(event: ChangeEventHandler<HTMLTextAreaElement>) => void`
   *  event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  /**
   * 	If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   */
  error?: boolean;
  /**
   * If `true`, the label is displayed as required and the `TextArea` element is required.
   */
  required?: boolean;
  /**
   * The id of the `TextArea` element. Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id?: string;
  /**
   * The value of the `TextArea` element, required for a controlled component.
   */
  value?: string;
}

const TextArea: FC<TextAreaProps> = ({
  id,
  label,
  placeholder,
  name,
  onChange,
  disabled,
  error,
  required,
  value,
  helperText,
  minHeight,
  ...props
}) => {
  const textAreaProps = {
    placeholder,
    name,
    onChange,
    disabled,
    error,
    required,
    helperText,
    id,
    value,
  };

  return (
    <Flex flexDirection="column" {...props}>
      <StyledLabel
        htmlFor={id}
        fontSize={12}
        fontWeight="semiBold"
        textColor={{ light: disabled ? 'gray-500' : 'gray-700', dark: disabled ? 'gray-500' : 'gray-300' }}
      >
        {label}
        {required && (
          <Text textColor="red-500" textStyle="xs" fontSize={18} lineHeight={0}>
            *
          </Text>
        )}
      </StyledLabel>
      <StyledTextArea
        minHeight={minHeight ? minHeight : '100px'}
        paddingAll={12}
        fontSize={14}
        backgroundColor={{ light: disabled ? 'gray-50' : 'common-white', dark: 'gray-900' }}
        textColor={{ light: 'gray-900', dark: 'gray-100' }}
        borderRadius="8px"
        borderColor={{ light: error ? 'gray-100' : 'gray-100', dark: error ? 'red-300' : 'gray-700' }}
        borderWidth="2px"
        marginBottom={8}
        resize="vertical"
        focus={{
          borderColor: error ? 'red-300' : 'primary-300',
          outline: 'none',
          boxShadow: {
            light: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${error ? '#FEE4E2' : '#F4EBFF'}`,
            dark: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${error ? '#FDA29B30' : '#344054'}`,
          },
        }}
        focusWithin={{ borderColor: error ? 'red-300' : 'primary-300' }}
        focusVisible={{ borderColor: error ? 'red-300' : 'primary-300' }}
        hover={{ backgroundColor: { light: 'common-white', dark: 'gray-800' } }}
        {...textAreaProps}
      />
      <Text textStyle="sm" textColor={error ? 'red-500' : 'gray-500'}>
        {helperText}
      </Text>
    </Flex>
  );
};

export default TextArea;

TextArea.defaultProps = {
  width: '320px',
};

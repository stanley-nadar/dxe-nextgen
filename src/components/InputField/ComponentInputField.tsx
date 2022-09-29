import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import TextField, { TextFieldProps, getIcon, getType } from 'molecules/TextField/TextField';

import ComponentButton from 'components/Button/ComponentButton';

import type { IComponentInputField, Maybe } from 'graphql/types';
import type { FC } from 'react';

type ComponentInputProps = Omit<IComponentInputField, 'contentfulMeta' | 'contentfulMetadata' | 'sys'> &
  Omit<Maybe<TextFieldProps>, 'children' | 'endIcon' | 'startIcon'>;

const ComponentInputField: FC<ComponentInputProps> = ({ submitButton, inputField, ...props }) => {
  const tipTitle = inputField?.endIcon === 'Help' ? inputField?.toolTipTitle : '';
  const tipDescription = inputField?.endIcon === 'Help' ? inputField?.toolTipDescription : '';

  return (
    <Flex flexDirection="column" gap="6px">
      {inputField?.label && (
        <label htmlFor={inputField?.sys?.id}>
          <Text textStyle="sm" fontWeight="medium" textColor="gray-800">
            {inputField?.label}
          </Text>
        </label>
      )}
      <Flex flexDirection="column" gap="16px" justifyContent="inherit" sm={{ flexDirection: 'row' }}>
        <TextField
          type={getType(inputField?.type || '') as TextFieldProps['type']}
          label=""
          name={inputField?.sys.id}
          id={inputField?.sys?.id}
          startIcon={inputField?.startIcon ? getIcon(inputField?.startIcon) : undefined}
          endIcon={inputField?.endIcon ? getIcon(inputField?.endIcon) : undefined}
          helperText={inputField?.helperText || ''}
          placeholder={inputField?.placeholder || ''}
          aria-label={inputField?.label}
          tooltip={tipTitle || ''}
          tooltipDescription={tipDescription || ''}
          md={{ width: '340px' }}
          xxxl={{ width: '522px' }}
          {...props}
        />
        <ComponentButton {...submitButton} width="100%" sm={{ width: 'unset', height: 'fit-content' }} />
      </Flex>
    </Flex>
  );
};

export default ComponentInputField;

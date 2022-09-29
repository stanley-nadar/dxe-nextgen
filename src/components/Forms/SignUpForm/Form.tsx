import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { Field, Form } from 'react-final-form';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import TextField, { TextFieldProps, getIcon, getType } from 'molecules/TextField/TextField';

import ComponentButton from 'components/Button/ComponentButton';

import type { IComponentSignUpForm, IFormInputField, Maybe } from 'graphql/types';

interface FormInformationTypes extends BasicProps {
  onFormSubmit: (formValues: IComponentSignUpForm) => void;
  hiddenFormsCollection?: Array<Maybe<IFormInputField>>;
  formErrorExists: boolean;
  firstName: Omit<IFormInputField, 'sys' | 'contentfulMetadata'>;
  lastName: Omit<IFormInputField, 'sys' | 'contentfulMetadata'>;
  email: Omit<IFormInputField, 'sys' | 'contentfulMetadata'>;
  phoneNumber: Omit<IFormInputField, 'sys' | 'contentfulMetadata'>;
  company: Omit<IFormInputField, 'sys' | 'contentfulMetadata'>;
}

const FormInformation: FC<FormInformationTypes> = ({
  onFormSubmit,
  formErrorExists,
  firstName,
  lastName,
  email,
  company,
  phoneNumber,
  hiddenFormsCollection,
}) => {
  const { t } = useTranslation('common');

  const required = (value: string) => (value ? undefined : 'Required.');

  const phoneValidation = (value: string) => {
    if (value === undefined) {
      return;
    }
    const removeDash = value?.replaceAll('-', '');
    const convertValuetoNumber = Number(removeDash);
    const checkNumber = isNaN(convertValuetoNumber) ? 'Only numbers and hyphens allowed' : undefined;

    return checkNumber;
  };

  return (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit, submitting }) => (
        <form
          onSubmit={handleSubmit}
          css={`
            width: 100%;
          `}
        >
          <Flex gap="16px" flexDirection="column" md={{ width: '100%' }}>
            <Flex flexDirection="column" gap="8px" md={{ flexDirection: 'row', gap: '12px' }}>
              <Field name="first_name" validate={required}>
                {({ input, meta }) => (
                  <Flex flexDirection="column" gap="6px" width="100%">
                    <label htmlFor={input.name}>
                      <Text textStyle="sm" fontWeight="medium" textColor="gray-800">
                        {firstName?.label}
                        {' *'}
                      </Text>
                    </label>
                    <TextField
                      name={input.name}
                      value={input.value}
                      onChange={input.onChange}
                      disabled={firstName?.disabled || false}
                      type={getType('Text') as TextFieldProps['type']}
                      startIcon={firstName?.startIcon ? getIcon(firstName?.startIcon) : undefined}
                      endIcon={firstName?.endIcon ? getIcon(firstName?.endIcon) : undefined}
                    />
                    {meta.error && meta.touched && (
                      <Text textColor="gray-600" fontSize={12}>
                        {meta.error}
                      </Text>
                    )}
                  </Flex>
                )}
              </Field>
              <Field name="last_name" validate={required} type="string">
                {({ input, meta }) => (
                  <Flex flexDirection="column" gap="6px" width="100%">
                    <label htmlFor={input.name}>
                      <Text textStyle="sm" fontWeight="medium" textColor="gray-800">
                        {lastName?.label}
                        {' *'}
                      </Text>
                    </label>
                    <TextField
                      name={input.name}
                      value={input.value}
                      onChange={input.onChange}
                      disabled={lastName?.disabled || false}
                      type={getType('Text') as TextFieldProps['type']}
                      startIcon={lastName?.startIcon ? getIcon(lastName?.startIcon) : undefined}
                      endIcon={lastName?.endIcon ? getIcon(lastName?.endIcon) : undefined}
                    />
                    {meta.error && meta.touched && (
                      <Text textColor="gray-600" fontSize={12}>
                        {meta.error}
                      </Text>
                    )}
                  </Flex>
                )}
              </Field>
            </Flex>

            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <Flex flexDirection="column" gap="6px" width="100%">
                  <label htmlFor={input.name}>
                    <Text textStyle="sm" fontWeight="medium" textColor="gray-800">
                      {email?.label}
                      {' *'}
                    </Text>
                  </label>
                  <TextField
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    disabled={email?.disabled || false}
                    type={getType('Email') as TextFieldProps['type']}
                    startIcon={email?.startIcon ? getIcon(email?.startIcon) : undefined}
                    endIcon={email?.endIcon ? getIcon(email?.endIcon) : undefined}
                  />
                  {meta.error && meta.touched && (
                    <Text textColor="gray-600" fontSize={12}>
                      {meta.error}
                    </Text>
                  )}
                </Flex>
              )}
            </Field>
            <Field name="company_name" validate={required}>
              {({ input, meta }) => (
                <Flex flexDirection="column" gap="6px" width="100%">
                  <label htmlFor={input.name}>
                    <Text textStyle="sm" fontWeight="medium" textColor="gray-800">
                      {company?.label}
                      {' *'}
                    </Text>
                  </label>
                  <TextField
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    disabled={company?.disabled || false}
                    type={getType('Text') as TextFieldProps['type']}
                    startIcon={company?.startIcon ? getIcon(company?.startIcon) : undefined}
                    endIcon={company?.endIcon ? getIcon(company?.endIcon) : undefined}
                  />
                  {meta.error && meta.touched && (
                    <Text textColor="gray-600" fontSize={12}>
                      {meta.error}
                    </Text>
                  )}
                </Flex>
              )}
            </Field>
            <Field name="phone" type="phone" validate={phoneValidation}>
              {({ input, meta }) => (
                <Flex flexDirection="column" gap="6px" width="100%">
                  <label htmlFor={input.name}>
                    <Text textStyle="sm" fontWeight="medium" textColor="gray-800">
                      {phoneNumber?.label}
                    </Text>
                  </label>
                  <TextField
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    disabled={phoneNumber?.disabled || false}
                    type={getType('Phone') as TextFieldProps['type']}
                    startIcon={phoneNumber?.startIcon ? getIcon(phoneNumber?.startIcon) : undefined}
                    endIcon={phoneNumber?.endIcon ? getIcon(phoneNumber?.endIcon) : undefined}
                  />
                  {meta.error && meta.touched && (
                    <Text textColor="gray-600" fontSize={12}>
                      {meta.error}
                    </Text>
                  )}
                </Flex>
              )}
            </Field>
            {formErrorExists && (
              <Text textAlign="center" textColor="red-900">
                {t('somethingWentWrong')}
              </Text>
            )}
            {hiddenFormsCollection?.map(hiddenForm => (
              <Field
                key={hiddenForm?.sys.id}
                name={hiddenForm?.identification || `emptyIdentificationLeftInContentfulSYSID${hiddenForm?.sys.id}`}
                defaultValue={hiddenForm?.valueOfField}
              >
                {({ input }) => (
                  <TextField
                    display="none"
                    type={getType('text') as TextFieldProps['type']}
                    name={input.name}
                    value={input?.valueOfField}
                    onChange={input.onChange}
                  />
                )}
              </Field>
            ))}
            <ComponentButton
              marginTop={16}
              zIndex={11}
              label={formErrorExists ? `${t('tryAgain')}` : `${t('createFreeAccount')}`}
              type="submit"
              width="100%"
              size="xLarge"
              cursor="pointer"
              disabled={submitting}
              labelIcon={submitting ? 'progress' : null}
            />
          </Flex>
        </form>
      )}
    />
  );
};

export default FormInformation;

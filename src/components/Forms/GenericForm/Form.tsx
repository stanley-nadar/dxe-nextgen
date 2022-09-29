import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { Field, FieldInputProps, Form } from 'react-final-form';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import Checkbox from 'molecules/Checkbox/Checkbox';
import Select from 'molecules/Select/Select';
import TextArea from 'molecules/TextArea/TextArea';
import TextField, { TextFieldProps, getIcon, getType } from 'molecules/TextField/TextField';

import ComponentButton from 'components/Button/ComponentButton';

import type {
  IComponentButton,
  IComponentGenericFormFormsCollection,
  IFormDropdownField,
  IFormInputField,
  Maybe,
} from 'graphql/types';

interface FormInformationTypes
  extends BasicProps,
    Omit<IComponentGenericFormFormsCollection, 'sys' | 'contentfulMetadata' | 'limit' | 'skip' | 'total'> {
  onFormSubmit: (values: IFormDropdownField | IFormInputField) => void;
  bodyTextFieldLabel?: string | null;
  callToAction?: IComponentButton;
  hiddenFormsCollection?: Array<Maybe<IFormInputField>>;
  termsOfService?: string;
  formSubmissionSuccess: boolean;
  formError: boolean;
}

const inputGenerator = (form: IFormDropdownField | IFormInputField, input: FieldInputProps<string>) => {
  switch (form?.__typename) {
    case 'FormInputField':
      return (
        <TextField
          name={input.name}
          value={input.value}
          aria-label={form.label}
          onChange={input.onChange}
          placeholder={form?.placeholder || ''}
          helperText={form?.helperText || ''}
          type={getType(form?.type || '') as TextFieldProps['type']}
          startIcon={form?.startIcon ? getIcon(form?.startIcon) : undefined}
          endIcon={form?.endIcon ? getIcon(form?.endIcon) : undefined}
        />
      );
    case 'FormDropdownField':
      return (
        <Select
          aria-label={form.label}
          placeholderText={form?.placeholder || ''}
          defaultValue="0"
          list={form?.options || []}
          onChange={input.onChange}
        />
      );
    default:
      return null;
  }
};

const FormInformation: FC<FormInformationTypes> = ({
  bodyTextFieldLabel,
  callToAction,
  onFormSubmit,
  items,
  termsOfService,
  formSubmissionSuccess,
  formError,
  hiddenFormsCollection,
}) => {
  const enableBodyTextField = typeof bodyTextFieldLabel === 'string';

  const { t } = useTranslation('common');

  const required = (value: string) => (value ? undefined : t('required'));

  const phoneValidation = (value?: string) => {
    if (value === undefined) {
      return;
    }
    const removeDash = value?.replaceAll('-', '');
    const convertValuetoNumber = Number(removeDash);
    const checkNumber = isNaN(convertValuetoNumber) ? t('onlyNumbersAndHypensAllowed') : undefined;

    return checkNumber;
  };

  const validationGenerator = (form: IFormDropdownField | IFormInputField | null) => {
    switch (form?.__typename) {
      case 'FormInputField': {
        const validation = form?.type === 'Phone' ? phoneValidation : required;

        return validation;
      }
      default:
        return required;
    }
  };

  return (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="column" gap="24px" md={{ gap: '32px' }}>
            <Flex gap="16px" flexDirection="column" md={{ width: '100%' }}>
              {items?.map(form => (
                <Field key={form?.sys.id} name={form?.label || 'invalid'} validate={validationGenerator(form)}>
                  {({ input, meta }) => (
                    <Flex flexDirection="column" gap="6px" width="100%">
                      <label htmlFor={input.name}>
                        <Text textStyle="sm" fontWeight="medium" textColor="gray-800">
                          {form?.label}
                        </Text>
                      </label>
                      {form && inputGenerator(form, input)}
                      {meta.error && meta.touched && (
                        <Text textColor="gray-600" fontSize={12}>
                          {meta.error}
                        </Text>
                      )}
                    </Flex>
                  )}
                </Field>
              ))}
              {enableBodyTextField && (
                <Field name="body" validate={required}>
                  {({ input, meta }) => (
                    <Flex flexDirection="column" gap="6px" width="100%">
                      <Text textStyle="sm" fontWeight="medium" textColor="gray-800">
                        {bodyTextFieldLabel}
                      </Text>
                      <TextArea width="100%" name={input.name} value={input.value} onChange={input.onChange} />
                      {meta.error && meta.touched && (
                        <Text textColor="gray-600" fontSize={12}>
                          {meta.error}
                        </Text>
                      )}
                    </Flex>
                  )}
                </Field>
              )}
            </Flex>
            <Checkbox
              size="large"
              required={true}
              label={
                <Text textColor="gray-600" fontSize={16}>
                  {t('iAgreeWith')}{' '}
                  <Link href={termsOfService || ''} textDecoration="none" textColor="primary-500">
                    {t('termsAndConditions')}
                  </Link>
                </Text>
              }
            />
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
            {formSubmissionSuccess && <Text textColor="primaryGreen-300">{t('formSubmittedSuccessfully')}</Text>}
            {formError && <Text textColor="red-400">{t('somethingWentWrong')}</Text>}
            {callToAction ? (
              <ComponentButton
                type="submit"
                label={callToAction?.label}
                cursor="pointer"
                width="100%"
                size="xLarge"
                disabled={submitting}
                {...callToAction}
              />
            ) : (
              <ComponentButton
                type="submit"
                label={t('submit')}
                cursor="pointer"
                width="100%"
                size="xLarge"
                disabled={submitting}
                hierarchy="Primary Color"
              />
            )}
          </Flex>
        </form>
      )}
    />
  );
};

export default FormInformation;

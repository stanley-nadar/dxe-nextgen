import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import Select from 'molecules/Select/Select';

import Form from 'components/Forms/GenericForm/Form';
import freshMarketerCall, { formSubmissionType } from 'components/Forms/GenericForm/formSubmit';

import type { IComponentGenericForm, IFormDropdownField, IFormInputField } from 'graphql/types';

type ComponentGenericFormProps = BasicProps & Omit<IComponentGenericForm, 'sys' | 'contentfulMetadata'>;

const ComponentGenericForm: FC<ComponentGenericFormProps> = ({
  heading,
  subheading,
  dataCenterList,
  bodyTextLabel,
  callToAction,
  formsCollection,
  hiddenFormsCollection,
  termsOfServicePage,
  ...props
}) => {
  const [dataCenterLocation, setDataCenterLocation] = useState('India');
  const [dropdDownIsActive, setDropDownActive] = useState(false);

  const { t } = useTranslation('common');
  const [formSubmisionSucess, setFormSubmissionSucess] = useState(false);
  const [formErrorExists, setFormError] = useState(false);

  const onFormSubmit = async (formValues: IFormDropdownField | IFormInputField) => {
    const submissionBody: formSubmissionType = {
      formValues,
      dataCenterLocation,
    };

    const callToFreshMarketer = await freshMarketerCall(submissionBody);
    if (callToFreshMarketer) {
      setFormError(false);
      setFormSubmissionSucess(true);
    } else {
      setFormSubmissionSucess(false);
      setFormError(true);
    }
  };

  const onSelection = (location: string) => {
    setDropDownActive(false);
    setDataCenterLocation(location);
  };

  return (
    <Container
      paddingX={24}
      paddingY={32}
      backgroundColor="common-white"
      border="1px solid"
      borderRadius="16px"
      borderColor="gray-100"
      md={{ paddingX: 48, paddingY: 56 }}
      xl={{ width: '470px' }}
      xxxl={{ width: '586px' }}
      {...props}
    >
      <Flex flexDirection="column" gap="24px" md={{ gap: '32px' }}>
        <Flex flexDirection="column" textAlign="center" gap="8px">
          {heading && (
            <Text textStyle="xs" fontSize={20} fontWeight="bold" md={{ fontSize: 24, lineHeight: 32 }}>
              {heading}
            </Text>
          )}
          {subheading && (
            <Text textStyle="xs" fontSize={20} textColor="gray-600">
              {subheading}
            </Text>
          )}
        </Flex>
        <Form
          callToAction={callToAction ? callToAction : undefined}
          onFormSubmit={onFormSubmit}
          items={formsCollection?.items || []}
          termsOfService={termsOfServicePage || ''}
          bodyTextFieldLabel={bodyTextLabel}
          formError={formErrorExists}
          formSubmissionSuccess={formSubmisionSucess}
          hiddenFormsCollection={hiddenFormsCollection?.items || []}
        />
        <Flex flexDirection="column" gap="24px" alignItems="center" md={{ gap: '32px' }}>
          {dropdDownIsActive ? (
            <Flex flexDirection="column" gap="6px" md={{ width: '100%' }}>
              <Select
                label={t('dataCenter')}
                onChange={e => onSelection(e)}
                list={dataCenterList || []}
                placeholderText={t('selectACountry')}
              />
            </Flex>
          ) : (
            <Flex flexDirection="column" gap="6px">
              <Flex textColor="gray-600" fontSize={14} md={{ fontSize: 16 }}>
                {t('yourDataWillBeLocatedIn')} {dataCenterLocation}
                <Text
                  textColor="primary-600"
                  fontWeight="bold"
                  cursor="pointer"
                  onClick={() => setDropDownActive(true)}
                  tabIndex={0}
                  marginLeft={10}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setDropDownActive(true)}
                >
                  {t('change')}
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default ComponentGenericForm;

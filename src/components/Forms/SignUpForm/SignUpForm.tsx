import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

// import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

// import Button from 'molecules/Button/Button';
import Select from 'molecules/Select/Select';

import Form from 'components/Forms/SignUpForm/Form';
import { alohaCall } from 'components/Forms/SignUpForm/formSubmit';

import type { IComponentSignUpForm } from 'graphql/types';

type ComponentSignUpFormProps = BasicProps & Omit<IComponentSignUpForm, 'sys' | 'contentfulMetadata'>;

const ComponentSignUpForm: FC<ComponentSignUpFormProps> = ({
  heading,
  termsOfService,
  privacyNotice,
  firstName,
  lastName,
  email,
  company,
  phoneNumber,
  pageRedirection,
  dataCenterList,
  hiddenFormsCollection,
  ...props
}) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [dataCenterLocation, setDataCenterLocation] = useState('India');
  const [dropdDownIsActive, setDropDownActive] = useState(false);
  // const [googleErrorExists, setGoogleError] = useState(false);
  const [formErrorExists, setFormError] = useState(false);

  const onSelection = (location: string) => {
    setDropDownActive(false);
    setDataCenterLocation(location);
  };

  const onFormSubmit = async (formValues: IComponentSignUpForm) => {
    const callToAlohaAPI = await alohaCall(formValues).then(response => response);

    if (callToAlohaAPI) {
      setFormError(false);

      router.push(pageRedirection || '/');
    } else {
      setFormError(true);
    }
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
      <Flex flexDirection="column" gap="24px" alignItems="center" md={{ gap: '32px' }}>
        <Text textStyle="xs" fontSize={20} fontWeight="bold" md={{ fontSize: 24, lineHeight: 32 }}>
          {heading}
        </Text>

        {/* Awaiting Repos transfer before handling OAuth */}

        {/* <GoogleLogin
          clientId="Detail stanley's team needs to fill"
          render={renderProps => (
            <Button
              backgroundColor="primaryBlue-600"
              width="100%"
              height="60px"
              cursor="pointer"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <Flex position="absolute" top="4px" left="2px" bottom={0} right={0}>
                <Icon size={52} id="google-icon" />
              </Flex>
              <Text textColor="common-white" textStyle="md" fontWeight="semiBold">
                {t('continueWithGoogle')}
              </Text>
            </Button>
          )}
          buttonText="Login"
          onSuccess={handleGoogleSignIn}
          onFailure={handleGoogleFailure}
          cookiePolicy="single_host_origin"
        /> */}
        {/* {googleErrorExists && <Text textColor="red-900">{t('somethingWentWrong')}</Text>} */}
        {/* <Flex
          width="100%"
          justifyContent="center"
          position="relative"
          after={{
            content: '',
            position: 'absolute',
            backgroundColor: 'gray-200',
            width: '100%',
            height: '1px',
            top: '14px',
          }}
        >
          <Text paddingX={16} backgroundColor="common-white" zIndex={1}>
            {t('orSignUpWithEmail')}
          </Text>
        </Flex> */}
        <Form
          firstName={firstName || {}}
          lastName={lastName || {}}
          email={email || {}}
          company={company || {}}
          phoneNumber={phoneNumber || {}}
          hiddenFormsCollection={hiddenFormsCollection?.items}
          onFormSubmit={onFormSubmit}
          formErrorExists={formErrorExists}
        />
        {termsOfService && (
          <Flex flexDirection="column" gap="24px" alignItems="center" md={{ gap: '32px' }}>
            <Text
              textColor="gray-600"
              textAlign="center"
              position="relative"
              paddingBottom={32}
              after={{
                content: '',
                position: 'absolute',
                backgroundColor: 'gray-200',
                right: 0,
                left: 0,
                bottom: 0,
                width: '100%',
                height: '1px',
              }}
            >
              {t('bySigningUp')}, {t('youAreAgreeingToOur')}{' '}
              <Link href={termsOfService || ''} textDecoration="none" textColor="primary-500">
                {t('terms')}{' '}
              </Link>
              {t('andAcknowledgingThatYouReadOur')}{' '}
              <Link href={privacyNotice || ''} textDecoration="none" textColor="primary-500">
                {t('privacyNotice')}
              </Link>
            </Text>

            {dropdDownIsActive ? (
              <Flex flexDirection="column" gap="6px" md={{ width: '100%' }}>
                <Select
                  label="Data Center"
                  onChange={e => onSelection(e)}
                  list={dataCenterList || []}
                  placeholderText="Select a Country"
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
                    marginLeft={10}
                  >
                    {t('change')}
                  </Text>{' '}
                </Flex>
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default ComponentSignUpForm;

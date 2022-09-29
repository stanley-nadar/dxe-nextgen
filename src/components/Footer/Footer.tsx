import useTranslation from 'next-translate/useTranslation';

import { ReactComponent as AppStore } from 'assets/svg/app-store.svg';
import { ReactComponent as GooglePlay } from 'assets/svg/google-play.svg';

import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import { sectionSizing } from 'molecules/Section/Section';

import ComponentButton from 'components/Button/ComponentButton';

import type { IComponentFooter } from 'graphql/types';
import type { FC } from 'react';

export type FooterProps = BasicProps &
  IComponentFooter & {
    footerStyle?: string;
  };

const Footer: FC<FooterProps> = ({
  menuItemsCollection,
  contactNumber,
  contactEmail,
  announcementCard,
  company,
  googlePlayUrl,
  appStoreUrl,
  privacyTermsMenuCollection,
  footerStyle,
  legalText,
  ...props
}) => {
  const { t } = useTranslation('common');
  const isBlack = footerStyle?.includes('Black');
  const isStandard = footerStyle?.includes('Standard');
  const topMenus = menuItemsCollection?.items;
  const privacyMenu = privacyTermsMenuCollection?.items;
  const socials = [
    { url: company?.twitterUrl, icon: 'twitter' },
    { url: company?.linkedinUrl, icon: 'linkedin' },
    { url: company?.facebookUrl, icon: 'facebook' },
    { url: company?.youtubeUrl, icon: 'youtube' },
    { url: company?.instagramUrl, icon: 'instagram' },
  ] as const;

  const scaleOnHover = {
    hover: { transform: 'scale(1.02)' },
  } as const;

  const border = {
    borderBottom: '1px solid',
    borderColor: isBlack ? 'gray-600' : 'gray-50',
  } as const;

  const headingColors = isBlack ? 'common-white' : 'gray-900';
  const bodyColors = isBlack ? 'gray-100' : 'gray-600';
  const legalColors = isBlack ? 'gray-100' : 'gray-600';

  const contactBar = () => (
    <Container paddingBottom={16} {...border}>
      <Flex flexWrap="wrap" gap="8px" alignItems="center">
        <Text textStyle="md" fontWeight="medium" marginRight={16} textColor={headingColors}>
          {t('contactFreshworks')}
        </Text>
        <Text textStyle="sm" textColor={headingColors}>
          <Link href={`tel:${contactNumber}`} textDecoration="none" textColor={headingColors}>
            {contactNumber}{' '}
          </Link>
          {t('or')}{' '}
          <Link
            textColor={isBlack ? 'primary-100' : 'primary-500'}
            href={`mailto:${contactEmail}`}
            textDecoration="none"
          >
            {contactEmail}
          </Link>
        </Text>
      </Flex>
    </Container>
  );

  const menus = () => (
    <Grid
      as="nav"
      paddingY={32}
      gridTemplate={`${topMenus && topMenus?.length > 2 ? 'repeat(2, 1fr)' : '1fr'}/repeat(2, 1fr)`}
      gap="30px 16px"
      md={{ gridTemplate: `1fr/repeat(${topMenus?.length}, 1fr)`, paddingBottom: 48 }}
      xl={{ width: '100%' }}
    >
      {topMenus?.map(topMenu => {
        const subMenus = topMenu?.menuCollection?.items;

        return (
          <Container key={topMenu?.sys.id}>
            <Text as="div" textStyle="lg" fontWeight="medium" marginBottom={10} textColor={headingColors}>
              {topMenu?.label}
            </Text>
            <Flex
              as="ul"
              flexDirection="column"
              paddingLeft={0}
              gap="8px"
              css={`
                list-style-type: none;
              `}
            >
              {subMenus?.map(subMenu => (
                <Container as="li" key={subMenu?.sys.id}>
                  <Link href={subMenu?.link || ''} textDecoration="none">
                    <Text
                      textStyle="sm"
                      textColor={bodyColors}
                      hover={{ textColor: isBlack ? 'primary-300' : 'primary-500' }}
                    >
                      {subMenu?.label}
                    </Text>
                  </Link>
                </Container>
              ))}
            </Flex>
          </Container>
        );
      })}
    </Grid>
  );

  const announcementCardSection = () => (
    <Flex
      gap="16px"
      maxWidth="475px"
      marginBottom={48}
      xl={{ flexDirection: 'column', paddingTop: 32, minWidth: '300px' }}
    >
      <Image
        src={announcementCard?.image?.image?.url || ''}
        alt={announcementCard?.image?.title || ''}
        width={announcementCard?.image?.image?.width || 0}
        height={announcementCard?.image?.image?.height || 0}
        display="none"
        sm={{ display: 'block' }}
      />
      <Container width="100%">
        <Text textStyle="md" fontWeight="semiBold" textColor={headingColors}>
          {announcementCard?.label}
        </Text>
        <Paragraph textStyle="xs" textColor={bodyColors} lg={{ textStyle: 'sm' }}>
          {announcementCard?.description}
        </Paragraph>
        <ComponentButton
          isDark={isBlack}
          {...announcementCard?.button}
          hover={isBlack ? { filter: 'brightness(0) invert(.85)' } : undefined}
        />
      </Container>
    </Flex>
  );

  const logoSocialsAndButtons = () => (
    <Flex
      gap="24px"
      flexDirection="column"
      paddingBottom={10}
      marginBottom={16}
      {...border}
      sm={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}
      lg={{ marginBottom: 32 }}
    >
      <Link href={company?.url || ''} cursor="pointer">
        <Image
          src={isBlack ? company?.logoDark?.url || '' : company?.logoLight?.url || ''}
          alt={isBlack ? company?.logoDark?.description || '' : company?.logoLight?.description || ''}
          height={33}
          width={165}
        />
      </Link>
      <Flex
        as="ul"
        paddingLeft={0}
        gap="16px"
        css={`
          list-style-type: none;
        `}
      >
        {socials.map(social => (
          <Container as="li" key={social.url}>
            <Link href={social.url || ''} tabIndex={0} cursor="pointer" hover={{ filter: 'brightness(.90)' }}>
              <Icon id={social.icon} size={25} />
            </Link>
          </Container>
        ))}
      </Flex>
      {(googlePlayUrl || appStoreUrl) && (
        <Flex gap="16px" md={{ marginLeft: 'auto' }}>
          {googlePlayUrl && (
            <Link href={googlePlayUrl || ''} cursor="pointer" aria-label="google-play" {...scaleOnHover}>
              <GooglePlay />
            </Link>
          )}
          {appStoreUrl && (
            <Link href={appStoreUrl || ''} aria-label="app-store" cursor="pointer" {...scaleOnHover}>
              <AppStore />
            </Link>
          )}
        </Flex>
      )}
    </Flex>
  );

  const privacyMenuSection = () => (
    <Flex
      as="ul"
      flexWrap="wrap"
      paddingLeft={0}
      paddingBottom={32}
      gap="4px 38px"
      css={`
        list-style-type: none;
      `}
      lg={{ paddingBottom: isStandard ? 16 : 0 }}
      xl={{ gap: '24px' }}
    >
      {privacyMenu?.map(menuItem => (
        <Container as="li" key={menuItem?.sys.id}>
          <Link href={menuItem?.link || ''} textDecoration="none">
            <Text textStyle="xs" textColor={legalColors} hover={{ textColor: isBlack ? 'primary-300' : 'primary-500' }}>
              {menuItem?.label}
            </Text>
          </Link>
        </Container>
      ))}
    </Flex>
  );

  return (
    <Container as="footer" backgroundColor={isBlack ? 'common-black' : undefined}>
      <Container paddingY={48} {...sectionSizing} marginX="auto" {...props}>
        {isStandard && contactBar()}
        {isStandard && (
          <Flex flexDirection="column" xl={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {menus()}
            {announcementCard && announcementCardSection()}
          </Flex>
        )}
        {isStandard && logoSocialsAndButtons()}
        <Flex flexDirection="column" xl={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {privacyMenuSection()}
          <Paragraph textStyle="md" textColor={legalColors}>
            <small>{legalText}</small>
          </Paragraph>
        </Flex>
      </Container>
    </Container>
  );
};

export default Footer;

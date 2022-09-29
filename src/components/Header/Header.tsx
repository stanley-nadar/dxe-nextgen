import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'react-feather';
import { useClickAway, useWindowSize } from 'react-use';

import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import { sectionMaxWidth } from 'molecules/Section/Section';

import ComponentButton from 'components/Button/ComponentButton';
import DesktopIcons from 'components/Header/DesktopIcons';
import MenuItem from 'components/Header/MenuItem';
import MobileMenuItem from 'components/Header/MobileMenuItem';
import SkipToMainContent from 'components/Header/SkipToMainContent';

import type { IComponentHeader } from 'graphql/types';

export interface HeaderProps extends BasicProps, IComponentHeader {
  headerStyle?: string;
  productNavActive: boolean;
}

const Header: FC<HeaderProps> = ({
  headerStyle,
  navigationLinksCollection,
  callToAction,
  callToActionMobile,
  productNavActive,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<number | null>(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLanguageMenuOpen, setLanguageMenu] = useState(false);

  const [pageHasScrolled, setPageHasScrolled] = useState(false);

  const isBlack = headerStyle?.includes('Black') && !productNavActive;

  const ref = useRef<HTMLUListElement>(null);

  const isDesktop = useMediaQuery(media.xl);
  const { width: windowWidth } = useWindowSize();

  const navigationLinks = navigationLinksCollection?.items;
  const desktopIcons = ['Login', 'Languages'];

  const backgroundIsWhite = isBlack === false;
  const backgroundColor = backgroundIsWhite ? 'common-white' : 'common-black';
  const enableBackgroundHeaderColor = pageHasScrolled || desktopMenu !== null || isMobileNavOpen;
  const navbarLinksColor = backgroundIsWhite ? 'common-black' : 'common-white';
  const nonFocusedLinksColor = backgroundIsWhite ? 'gray-500' : 'gray-100';
  const minimalNavList = ['Minimal', 'Minimal Black'];
  const isMinimalNav = minimalNavList.includes(headerStyle || '');

  useClickAway(ref, event => {
    if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
      setDesktopMenu(null);
    }
  });

  const handleBackgroundChange = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (pageHasScrolled === false && scrollTop > 0) {
      if (windowWidth > 1279) {
        setIsMobileNavOpen(false);
      }
      setPageHasScrolled(true);
    } else if (pageHasScrolled === true && scrollTop === 0) {
      setPageHasScrolled(false);
    } else if (pageHasScrolled === true && scrollTop > 111) {
      setDesktopMenu(null);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleBackgroundChange);

      return () => window.removeEventListener('scroll', handleBackgroundChange);
    }

    return;
  }, [pageHasScrolled]);

  const handleDesktopMenu = (index: number) => {
    if (desktopMenu === index) {
      return setDesktopMenu(null);
    }
    setDesktopMenu(index);
  };

  const closeBothMenus = () => {
    setDesktopMenu(null);
    setIsMobileNavOpen(false);
  };

  return (
    <Container
      as="header"
      display={isDesktop || !productNavActive ? 'block' : 'none'}
      position={isMobileNavOpen || productNavActive ? 'relative' : 'fixed'}
      zIndex={11}
      width="100%"
      backgroundColor={enableBackgroundHeaderColor || productNavActive ? backgroundColor : undefined}
      boxShadow={enableBackgroundHeaderColor || productNavActive ? 'sm' : undefined}
      transition="all 0.3s ease"
    >
      <SkipToMainContent backgroundColor={backgroundColor} textColor={navbarLinksColor} />
      <Container as="nav" marginX="auto" marginY={0} maxWidth={sectionMaxWidth}>
        <Flex
          justifyContent={isMinimalNav ? 'flex-start' : 'space-between'}
          textColor={backgroundIsWhite ? 'gray-900' : 'common-white'}
          minHeight="88px"
          paddingX={16}
          sm={{ paddingX: 32 }}
          md={{ minHeight: '112px' }}
          lg={{ paddingX: 96 }}
          xl={{ paddingX: 96, justifyContent: isMinimalNav ? 'flex-start' : 'space-between' }}
        >
          <Flex gap="42px" alignItems="center">
            <Link href="https://www.freshworks.com/">
              <Image
                src={backgroundIsWhite ? '/images/headerLogoLight.webp' : '/images/headerLogoDark.webp'}
                width={140}
                height={28}
                alt="freshworks-logo"
                alignSelf="center"
                marginTop={10}
              />
            </Link>
            {navigationLinks && !isMinimalNav && (
              <Flex gap="32px" ref={ref} display="none" as="ul" xl={{ display: 'flex' }}>
                {navigationLinks.map((link, index) => {
                  const navHasChildren = link?.menuCollection?.items && link?.menuCollection?.items?.length > 0;

                  if (!navHasChildren || link?.label === 'Languages') {
                    return;
                  }

                  return (
                    <Flex as="li" alignItems="center" gap="4px" key={link?.sys.id}>
                      <Text
                        tabIndex={0}
                        textColor={
                          desktopMenu === index || desktopMenu === null ? navbarLinksColor : nonFocusedLinksColor
                        }
                        borderBottom={desktopMenu === index ? '1px solid' : ''}
                        fontWeight={desktopMenu === index ? 'bold' : 'regular'}
                        paddingBottom={2}
                        onClick={() => handleDesktopMenu(index)}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleDesktopMenu(index);
                          }
                        }}
                        cursor="pointer"
                        hover={{ borderBottom: '1px solid' }}
                      >
                        {link?.label}
                      </Text>
                      <Container>
                        <MenuItem
                          key={link?.sys.id}
                          isMenuOpen={index === desktopMenu}
                          navigationLinks={link?.menuCollection}
                          closeDesktopMenu={() => setDesktopMenu(null)}
                        />
                      </Container>
                    </Flex>
                  );
                })}
              </Flex>
            )}
          </Flex>
          {navigationLinks && !isMinimalNav && (
            <Flex gap="32px" alignItems="center" onClick={() => setDesktopMenu(null)} as="li">
              <Flex as="ul" gap="32px" display="none" xl={{ display: 'flex' }}>
                {navigationLinks.map(link => {
                  if (link?.menuCollection?.items?.length !== 0 || desktopIcons.includes(link?.label || '')) {
                    return;
                  }

                  return (
                    <Link key={link?.sys.id} href={link?.link || ''} textDecoration="none" tabIndex={0}>
                      <Text
                        textColor={backgroundIsWhite ? 'gray-900' : 'common-white'}
                        cursor="pointer"
                        paddingBottom={2}
                        hover={{
                          textColor: backgroundIsWhite ? 'primary-900' : 'common-white',
                          borderBottom: '1px solid',
                          borderColor: backgroundIsWhite ? 'primary-900' : 'common-white',
                        }}
                      >
                        {link?.label}
                      </Text>
                    </Link>
                  );
                })}
                <DesktopIcons
                  isLanguageMenuOpen={isLanguageMenuOpen}
                  onLanguageClick={() => setLanguageMenu(!isLanguageMenuOpen)}
                  onSearchClick={() => setSearchOpen(!isSearchOpen)}
                  closeLanguage={() => setLanguageMenu(false)}
                  closeSearch={() => setSearchOpen(false)}
                  backgroundIsWhite={backgroundIsWhite}
                  navigationLinkCollection={navigationLinksCollection}
                />
              </Flex>
              {callToAction && (
                <Container marginBottom={4} display="none" sm={{ display: 'block' }}>
                  <ComponentButton {...callToAction} onClick={() => closeBothMenus()} isDark={isBlack} />
                </Container>
              )}
              <Container marginTop={4} xl={{ display: 'none' }}>
                {isMobileNavOpen ? (
                  <X
                    cursor="pointer"
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsMobileNavOpen(!isMobileNavOpen);
                      }
                    }}
                  />
                ) : (
                  <Menu
                    cursor="pointer"
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsMobileNavOpen(!isMobileNavOpen);
                      }
                    }}
                  />
                )}
              </Container>
            </Flex>
          )}
        </Flex>
        {!isDesktop && (
          <MobileMenuItem
            mobileButton={callToActionMobile}
            isMobileNavOpen={isMobileNavOpen}
            mobileNavigationLinks={navigationLinksCollection}
            closeMobileMenu={closeBothMenus}
          />
        )}
      </Container>
    </Container>
  );
};

export default Header;

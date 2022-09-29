import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';
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
import MobileMenuItem from 'components/Header/MobileMenuItem';
import MenuItem from 'components/HeaderProduct/MenuItem';
import MobileNavControl from 'components/HeaderProduct/MobileNavControl';

import type { IComponentHeader } from 'graphql/types';

export interface HeaderProps extends BasicProps, IComponentHeader {
  headerStyle?: string;
}

const Header: FC<HeaderProps> = ({
  headerStyle,
  navigationLinksCollection,
  navigationLinksMobileCollection,
  freshworksProduct,
  callToAction,
  callToActionMobile,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<number | null>(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLanguageMenuOpen, setLanguageMenu] = useState(false);

  const isBlack = headerStyle?.includes('Black');
  const [pageHasScrolled, setPageHasScrolled] = useState(false);

  const ref = useRef<HTMLUListElement>(null);

  const isWiderScreen = useMediaQuery(media.md);
  const isDesktop = useMediaQuery(media.xl);
  const { width: windowWidth } = useWindowSize();

  const navigationLinks = navigationLinksCollection?.items;

  const backgroundIsWhite = !isBlack;
  const backgroundColor = backgroundIsWhite ? 'common-white' : 'common-black';
  const enableBackgroundHeaderColor = pageHasScrolled || desktopMenu !== null || isMobileNavOpen;
  const navbarLinksColor = backgroundIsWhite ? 'common-black' : 'common-white';
  const nonFocusedLinksColor = backgroundIsWhite ? 'gray-500' : 'gray-100';

  const freshProductLogoColorScheme = isBlack
    ? `/images/${freshworksProduct}/${freshworksProduct?.toLowerCase()}Dark.webp`
    : `/images/${freshworksProduct}/${freshworksProduct?.toLowerCase()}Light.webp`;

  const freshworksLogoColorScheme = isBlack ? '/images/headerLogoDark.webp' : '/images/headerLogoLight.webp';

  const mobilefreshProductLogo = freshworksProduct
    ? `/images/${freshworksProduct}/${freshworksProduct?.toLowerCase()}Mobile.webp`
    : '/images/mobileLogo.webp';
  const freshProductLogo = freshworksProduct ? freshProductLogoColorScheme : freshworksLogoColorScheme;

  useClickAway(ref, event => {
    if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
      setDesktopMenu(null);
    }
  });

  const handleBackgroundChange = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (!pageHasScrolled && scrollTop > 112) {
      if (windowWidth > 1279) {
        setIsMobileNavOpen(false);
      }
      setPageHasScrolled(true);
    } else if (pageHasScrolled && scrollTop === 0) {
      setPageHasScrolled(false);
    }
  }, [pageHasScrolled, windowWidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleBackgroundChange);

      return () => window.removeEventListener('scroll', handleBackgroundChange);
    }

    return;
  }, [pageHasScrolled, handleBackgroundChange]);

  const handleDesktopMenu = useCallback(
    (index: number) => {
      if (desktopMenu === index) {
        return setDesktopMenu(null);
      }
      setDesktopMenu(index);
    },
    [desktopMenu],
  );

  const closeBothMenus = useCallback(() => {
    setDesktopMenu(null);
    setIsMobileNavOpen(false);
  }, []);

  const navigations = useMemo(
    () =>
      navigationLinks &&
      navigationLinks.map((link, index) => {
        const navHasChildren = link?.menuCollection?.items && link?.menuCollection?.items?.length > 0;

        const excludedItems = ['Login', 'Languages', 'All Products'];
        const label = link?.label || '';

        if (excludedItems.includes(label)) {
          return;
        }

        return (
          <Flex
            as="li"
            alignItems="center"
            gap="32px"
            key={link?.sys.id}
            display={index === 0 ? 'flex' : 'none'}
            xl={{ display: 'flex' }}
          >
            {navHasChildren ? (
              <Text
                tabIndex={0}
                textColor={navbarLinksColor}
                fontSize={index === 0 ? 20 : 18}
                borderBottom={desktopMenu === index && index !== 0 ? '1px solid' : ''}
                fontWeight={desktopMenu === index ? 'bold' : 'regular'}
                paddingBottom={index !== 0 ? 2 : 0}
                onClick={() => handleDesktopMenu(index)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleDesktopMenu(index);
                  }
                }}
                cursor="pointer"
                hover={{ borderBottom: index !== 0 ? '1px solid' : 'none' }}
                css={{ userSelect: 'none', whiteSpace: 'nowrap', pointerEvents: isDesktop ? 'all' : 'none' }}
                lg={{ fontWeight: index === 0 ? 'medium' : 'regular' }}
              >
                {link?.label}
                {isDesktop && index === 0 && (
                  <ChevronDown
                    css={{
                      verticalAlign: 'middle',
                      marginLeft: 8,
                      transform: desktopMenu === 0 ? 'rotateZ(180deg)' : 'none',
                      transition: 'transform .2s ease',
                    }}
                  />
                )}
              </Text>
            ) : (
              <Link key={link?.sys.id} href={link?.link || ''} textDecoration="none" tabIndex={0}>
                <Text
                  textColor={backgroundIsWhite ? 'gray-900' : 'common-white'}
                  cursor="pointer"
                  paddingBottom={2}
                  hover={{
                    textColor: backgroundIsWhite ? 'gray-900' : 'common-white',
                    borderBottom: '1px solid',
                    borderColor: backgroundIsWhite ? 'gray-900' : 'common-white',
                  }}
                  css={{ userSelect: 'none', whiteSpace: 'nowrap' }}
                >
                  {link?.label}
                </Text>
              </Link>
            )}
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
      }),
    [isDesktop, desktopMenu, navbarLinksColor, nonFocusedLinksColor, navigationLinks],
  );

  const allProductLink = useMemo(
    () =>
      navigationLinks &&
      navigationLinks.map(
        link =>
          link?.label === 'All Products' && (
            <Link key={link?.sys.id} href={link?.link || ''} textDecoration="none" tabIndex={0}>
              <Text
                textColor={backgroundIsWhite ? 'gray-900' : 'common-white'}
                cursor="pointer"
                paddingBottom={2}
                hover={{
                  textColor: backgroundIsWhite ? 'gray-900' : 'common-white',
                  borderBottom: '1px solid',
                  borderColor: backgroundIsWhite ? 'gray-900' : 'common-white',
                }}
                css={{ userSelect: 'none', whiteSpace: 'nowrap' }}
              >
                {link?.label}
              </Text>
            </Link>
          ),
      ),
    [backgroundIsWhite, navigationLinks],
  );

  return (
    <Container
      as="header"
      position={isDesktop && !pageHasScrolled ? 'absolute' : 'fixed'}
      top={isDesktop && !pageHasScrolled ? '112px' : '0px'}
      zIndex={pageHasScrolled ? 20 : 10}
      width="100%"
      backgroundColor={enableBackgroundHeaderColor ? backgroundColor : 'common-transparent'}
      boxShadow={enableBackgroundHeaderColor ? 'sm' : undefined}
      transition="top 0.2s ease"
    >
      <Container as="nav" marginX="auto" marginY={0} maxWidth={sectionMaxWidth}>
        <Flex
          ref={ref}
          as="ul"
          css={{ userSelect: 'none' }}
          justifyContent="space-between"
          textColor={backgroundIsWhite ? 'gray-900' : 'common-white'}
          minHeight="88px"
          paddingX={16}
          sm={{ paddingX: 32 }}
          md={{ minHeight: '112px' }}
          lg={{ paddingX: 96 }}
        >
          <Flex gap="12px" alignItems="center" as="li" md={{ gap: '24px' }}>
            <Link href="https://www.freshworks.com/" tabIndex={0}>
              <Image
                src={isWiderScreen ? freshProductLogo : mobilefreshProductLogo}
                width={isWiderScreen ? 140 : 25}
                height="100%"
                objectFit="contain"
                alt="Freshworks Logo"
                alignSelf="center"
                marginTop={10}
              />
            </Link>
            <Container height="32px" borderRight="1px solid" borderRightColor="gray-600" />
            {navigations}
          </Flex>
          {((navigationLinks && pageHasScrolled) || !isDesktop) && (
            <Flex gap="32px" alignItems="center" onClick={() => setDesktopMenu(null)} as="li">
              <Flex gap="32px" display="none" xl={{ display: 'flex' }}>
                {allProductLink}
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
                <Container marginBottom={4} display="none" sm={{ display: 'block', whiteSpace: 'nowrap' }}>
                  <ComponentButton {...callToAction} onClick={() => closeBothMenus()} isDark={isBlack} />
                </Container>
              )}
              <MobileNavControl isMobileNavOpen={isMobileNavOpen} onSetMobileNavOpen={setIsMobileNavOpen} />
            </Flex>
          )}
        </Flex>
        {!isDesktop && (
          <MobileMenuItem
            isProductNav
            mobileButton={callToActionMobile}
            isMobileNavOpen={isMobileNavOpen}
            mobileNavigationLinks={navigationLinksMobileCollection}
            closeMobileMenu={() => closeBothMenus()}
          />
        )}
      </Container>
    </Container>
  );
};

export default Header;

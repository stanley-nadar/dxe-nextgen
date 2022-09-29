import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { ChevronDown } from 'react-feather';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import TextField from 'molecules/TextField/TextField';

import ComponentButton from 'components/Button/ComponentButton';
import MobileSubMenuItem from 'components/Header/MobileSubMenuItem';

import type {
  IComponentButton,
  IComponentHeaderNavigationLinksCollection,
  IComponentHeaderNavigationLinksMobileCollection,
} from 'graphql/types';

interface MobileItemProps
  extends BasicProps,
    Omit<
      IComponentHeaderNavigationLinksCollection | IComponentHeaderNavigationLinksMobileCollection,
      'sys' | 'contentfulMetadata' | 'items' | 'limit' | 'skip' | 'total'
    > {
  mobileNavigationLinks?:
    | IComponentHeaderNavigationLinksCollection
    | IComponentHeaderNavigationLinksMobileCollection
    | null;
  isProductNav?: boolean;
  isMobileNavOpen: boolean;
  mobileButton?: IComponentButton | null;
  closeMobileMenu: () => void;
}

const MobileMenuItem: FC<MobileItemProps> = ({
  isProductNav = false,
  mobileNavigationLinks,
  isMobileNavOpen,
  mobileButton,
  closeMobileMenu,
}) => {
  const { asPath } = useRouter();

  const mobileNavbarLinks = mobileNavigationLinks?.items;
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const handleMenu = (linkIndex: number) => {
    if (openMenu === linkIndex) {
      return setOpenMenu(null);
    }
    setOpenMenu(linkIndex);
  };

  return (
    <Container
      position="absolute"
      top="88px"
      bottom={0}
      left={0}
      right={0}
      zIndex={10}
      backgroundColor="common-white"
      height={isMobileNavOpen ? '2500px' : '0px'}
      transition="all 0.15s ease-in-out"
      paddingX={15}
      paddingTop={isMobileNavOpen ? 32 : 0}
      paddingBottom={isMobileNavOpen ? 48 : 0}
      opacity={isMobileNavOpen ? 1 : 0}
      borderTop="1px solid"
      borderColor="gray-50"
      overflowY="hidden"
      css={{ pointerEvents: isMobileNavOpen ? 'all' : 'none' }}
      sm={{ paddingX: 32 }}
      md={{ top: '112px' }}
      lg={{ paddingX: 96 }}
      xl={{ maxHeight: '0px', paddingAll: 0 }}
    >
      <TextField marginTop={8} type="url" placeholder="Search" marginBottom={32} width="100%" />

      <Flex
        as="ul"
        flexDirection="column"
        gap="26px"
        paddingAll={0}
        css={`
          list-style-type: none;
        `}
      >
        {mobileNavbarLinks?.map((navLink, index) => {
          const navHasChildren = navLink?.menuCollection?.items && navLink?.menuCollection?.items?.length > 0;

          return (
            <Flex as="li" key={navLink?.sys.id} flexDirection="column">
              {navLink?.label !== 'Languages' ? (
                <Link
                  href={navLink?.link || ''}
                  tabIndex={0}
                  textDecoration="none"
                  onClick={navHasChildren ? () => handleMenu(index) : () => closeMobileMenu()}
                  onKeyDown={e => {
                    if (e.key === ' ') {
                      e.preventDefault();
                      handleMenu(index);
                    }
                  }}
                >
                  <Flex
                    paddingBottom={12}
                    flexDirection="column"
                    borderBottom="1px solid"
                    borderColor="gray-50"
                    cursor="pointer"
                  >
                    <Flex justifyContent="space-between">
                      <Text
                        textStyle="lg"
                        textColor={openMenu === index ? 'primary-900' : 'gray-900'}
                        hover={{ textColor: 'primary-900' }}
                      >
                        {navLink?.label}
                      </Text>
                      {navHasChildren && (
                        <Flex
                          alignItems="center"
                          css={`
                            > svg {
                              transition: 150ms;
                            }
                          `}
                        >
                          <ChevronDown transform={`rotate(${openMenu === index ? 180 : 0})`} size={20} />
                        </Flex>
                      )}
                    </Flex>
                    {navHasChildren && index === openMenu && (
                      <MobileSubMenuItem
                        isProductNav={isProductNav}
                        closeMobileMenu={closeMobileMenu}
                        closeSubMobileMenu={() => setOpenMenu(null)}
                        subMenuItem={navLink?.menuCollection}
                      />
                    )}
                  </Flex>
                </Link>
              ) : (
                <>
                  <Flex
                    paddingBottom={12}
                    tabIndex={0}
                    justifyContent="space-between"
                    borderBottom="1px solid"
                    borderColor="gray-50"
                    cursor="pointer"
                    hover={{ textColor: 'primary-900' }}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleMenu(index);
                      }
                    }}
                    onClick={navHasChildren ? () => handleMenu(index) : closeMobileMenu}
                  >
                    <Text textStyle="lg">{navLink?.label}</Text>
                    {navHasChildren && (
                      <Flex
                        alignItems="center"
                        css={`
                          > svg {
                            transition: 150ms;
                          }
                        `}
                      >
                        <ChevronDown transform={`rotate(${openMenu === index ? 180 : 0})`} size={20} />
                      </Flex>
                    )}
                  </Flex>
                  <Container>
                    {navHasChildren && index === openMenu && (
                      <Flex flexDirection="column" gap="12px">
                        {navLink?.menuCollection?.items.map(subLink => (
                          <Link
                            key={subLink?.sys.id}
                            textDecoration="none"
                            textColor="common-black"
                            href={`${subLink?.link}${asPath}`}
                            locale={subLink?.description || ''}
                            onClick={closeMobileMenu}
                          >
                            <Flex
                              hover={{ textColor: 'primary-900' }}
                              paddingAll={12}
                              borderBottom="1px solid"
                              borderColor="gray-25"
                            >
                              <Text>{subLink?.label}</Text>
                            </Flex>
                          </Link>
                        ))}
                      </Flex>
                    )}
                  </Container>
                </>
              )}
            </Flex>
          );
        })}
        {mobileButton && (
          <Container as="li" cursor="pointer" onClick={closeMobileMenu} sm={{ display: 'none' }}>
            <ComponentButton {...mobileButton} width="100%" />
          </Container>
        )}
      </Flex>
    </Container>
  );
};

export default MobileMenuItem;

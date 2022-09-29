import { FC, useCallback, useState } from 'react';
import { ChevronDown } from 'react-feather';

import { IMenuItemMenuCollection } from 'graphql/types';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentButton from 'components/Button/ComponentButton';

interface mobileSubMenuItem extends BasicProps {
  isProductNav?: boolean;
  subMenuItem?: IMenuItemMenuCollection | null;
  closeSubMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const MobileSubMenuItem: FC<mobileSubMenuItem> = ({
  isProductNav,
  subMenuItem,
  closeSubMobileMenu,
  closeMobileMenu,
}) => {
  const menuItems = subMenuItem?.items;

  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const handleMenu = useCallback(
    (linkIndex: number, e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      if (openMenu === linkIndex) {
        return setOpenMenu(null);
      }
      setOpenMenu(linkIndex);
    },
    [openMenu],
  );

  const closeBothMobileMenus = () => {
    closeSubMobileMenu();
    closeMobileMenu();
  };

  return (
    <Flex paddingAll={24} flexDirection="column" gap="40px">
      {menuItems?.map(menuItem => (
        <Flex key={menuItem?.sys?.id} flexDirection="column" gap="32px">
          <Text
            fontSize={24}
            paddingBottom={20}
            fontWeight="semiBold"
            borderBottom="1px solid"
            borderColor="gray-100"
            width="100%"
          >
            {menuItem?.label}
          </Text>
          <Flex
            as="ul"
            paddingLeft={0}
            gap="24px"
            flexDirection="column"
            sm={{
              flexDirection:
                isProductNav &&
                menuItem?.menuCollection?.items
                  .map(navlink => navlink?.menuCollection?.items && navlink?.menuCollection?.items?.length > 0)
                  .includes(true)
                  ? 'column'
                  : 'row',
              flexWrap: 'wrap',
              gap: '32px',
            }}
            css={`
              list-style-type: none;
            `}
          >
            {menuItem?.menuCollection?.items.map((navlink, index) => {
              const navHasChildren = navlink?.menuCollection?.items && navlink?.menuCollection?.items?.length > 0;

              return (
                <Container key={navlink?.sys?.id} as="li">
                  <Link
                    href={navHasChildren ? '' : navlink?.link || ''}
                    textDecoration="none"
                    onClick={e => (navHasChildren ? handleMenu(index, e) : closeBothMobileMenus())}
                    onKeyDown={e => {
                      if (e.key === ' ') {
                        e.preventDefault();
                        handleMenu(index, e);
                      }
                    }}
                  >
                    <Flex
                      flexDirection="column"
                      gap="4px"
                      sm={{ width: isProductNav && navHasChildren ? '100%' : '338px' }}
                      cursor="pointer"
                      textColor={isProductNav && navHasChildren && openMenu === index ? 'primary-500' : 'gray-900'}
                      hover={{
                        textColor: isProductNav && navHasChildren && openMenu === index ? 'primary-500' : 'primary-900',
                      }}
                    >
                      <Flex justifyContent="space-between">
                        <Text fontSize={18} fontWeight="semiBold">
                          {navlink?.label}
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
                      <Text textColor="gray-500" fontSize={16}>
                        {navlink?.description}
                      </Text>
                      {navHasChildren && index === openMenu && (
                        <Flex flexDirection="row" flexWrap="wrap" gap="32px" paddingAll={32}>
                          {navlink?.menuCollection?.items.map(link => (
                            <Container key={link?.sys?.id} as="li">
                              <Link href={link?.link || ''} textDecoration="none">
                                <Flex
                                  flexDirection="column"
                                  gap="4px"
                                  sm={{ width: '338px' }}
                                  cursor="pointer"
                                  textColor="gray-900"
                                  hover={{ textColor: 'primary-900' }}
                                >
                                  {link?.label && (
                                    <Text fontSize={18} fontWeight="semiBold">
                                      {link.label}
                                    </Text>
                                  )}
                                  {link?.description && (
                                    <Text textColor="gray-500" fontSize={16}>
                                      {link.description}
                                    </Text>
                                  )}
                                </Flex>
                              </Link>
                            </Container>
                          ))}
                        </Flex>
                      )}
                      {navlink?.button && (
                        <Container>
                          <ComponentButton paddingLeft={0} {...navlink?.button} size="medium" />
                        </Container>
                      )}
                    </Flex>
                  </Link>
                </Container>
              );
            })}
          </Flex>
          {menuItem?.button && <ComponentButton onClick={closeBothMobileMenus} paddingLeft={0} {...menuItem?.button} />}
        </Flex>
      ))}
    </Flex>
  );
};

export default MobileSubMenuItem;

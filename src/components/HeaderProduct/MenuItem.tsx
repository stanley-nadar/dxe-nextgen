import { container } from 'atoms/spacing/containers';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentButton from 'components/Button/ComponentButton';
import SubMenuItem from 'components/HeaderProduct/SubMenuItem';

import retrieveImageData from 'utils/retrieveImageData';

import type { IMenuItemMenuCollection } from 'graphql/types';
import type { FC } from 'react';

interface MenuItemProps
  extends BasicProps,
    Omit<IMenuItemMenuCollection, 'sys' | 'contentfulMetadata' | 'items' | 'limit' | 'skip' | 'total'> {
  navigationLinks?: IMenuItemMenuCollection | null;
  isMenuOpen: boolean;
  closeDesktopMenu: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ navigationLinks, isMenuOpen, closeDesktopMenu }) => {
  const containsThreeSubMenus = navigationLinks && navigationLinks.items.length > 2;

  return (
    <Flex
      position="absolute"
      backgroundColor="common-white"
      zIndex={10}
      boxShadow="md"
      top="112px"
      left={0}
      right={0}
      borderColor="gray-25"
      justifyContent="space-around"
      paddingAll={isMenuOpen ? 40 : 0}
      maxHeight={isMenuOpen ? '1000px' : '0px'}
      transition="all 0.3s"
      overflowY="hidden"
      display="none"
      xl={{ display: 'flex' }}
    >
      <Flex
        display={isMenuOpen ? 'flex' : 'none'}
        marginLeft={containsThreeSubMenus ? 0 : 128}
        xxl={{ justifyContent: 'center', width: container.xl }}
        xxxl={{ width: container.xl, marginLeft: containsThreeSubMenus ? 0 : 80 }}
        gap="40px"
      >
        {navigationLinks?.items?.map((link, index) => {
          const imageData = link?.image && retrieveImageData(link.image);

          return (
            <Flex
              key={link?.sys.id}
              flexDirection="column"
              position="relative"
              after={
                (containsThreeSubMenus && index === 1) || (!containsThreeSubMenus && index === 0)
                  ? {
                      content: '',
                      position: 'absolute',
                      backgroundColor: 'gray-50',
                      width: '2px',
                      height: '100%',
                      bottom: 0,
                      right: 0,
                    }
                  : undefined
              }
            >
              <Flex gap="40px" flexDirection="column">
                <Text fontSize={24} fontWeight="semiBold" textColor="gray-900">
                  {link?.label}
                </Text>
                {imageData && (
                  <Flex borderRadius="24px">
                    <Image src={imageData.src} alt={imageData.alt} width={imageData.width} height={imageData?.height} />
                  </Flex>
                )}
                <Flex
                  gap="24px"
                  as="ul"
                  flexWrap={link?.menuCollection && link?.menuCollection?.items?.length > 2 ? 'wrap' : 'nowrap'}
                  flexDirection={!containsThreeSubMenus || link?.blogFormat ? 'row' : 'column'}
                  paddingLeft={0}
                  css={`
                    list-style-type: none;
                  `}
                >
                  {link?.menuCollection?.items?.map(subLink => (
                    <SubMenuItem
                      key={subLink?.sys.id}
                      isOpen={isMenuOpen}
                      containsBlog={containsThreeSubMenus || false}
                      subLink={subLink}
                      closeDesktopMenu={closeDesktopMenu}
                    />
                  ))}
                </Flex>
                {link?.button && <ComponentButton {...link.button} onClick={closeDesktopMenu} />}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default MenuItem;

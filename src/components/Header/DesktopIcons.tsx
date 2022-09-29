import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import { Globe, User } from 'react-feather';
import { useClickAway } from 'react-use';

import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import type { IComponentHeaderNavigationLinksCollection } from 'graphql/types';

interface DesktopIconProps
  extends BasicProps,
    Omit<
      IComponentHeaderNavigationLinksCollection,
      'sys' | 'contentfulMetadata' | 'items' | 'limit' | 'skip' | 'total'
    > {
  navigationLinkCollection?: IComponentHeaderNavigationLinksCollection | null;
  backgroundIsWhite?: boolean | null;
  isLanguageMenuOpen?: boolean;
  onLanguageClick: () => void;
  onSearchClick: () => void;
  closeLanguage: () => void;
  closeSearch: () => void;
}
const DesktopIcons: FC<DesktopIconProps> = ({
  navigationLinkCollection,
  backgroundIsWhite,
  isLanguageMenuOpen,
  onLanguageClick,
  onSearchClick,
  closeLanguage,
  closeSearch,
}) => {
  const { asPath } = useRouter();

  const refSearch = useRef<HTMLDivElement>(null);
  const refGlobe = useRef<HTMLDivElement>(null);

  const navigationLinks = navigationLinkCollection?.items;

  useClickAway(refGlobe, event => {
    if (refGlobe.current && !refGlobe.current.contains(event.target as HTMLDivElement)) {
      closeLanguage();
    }
  });

  useClickAway(refSearch, event => {
    if (refSearch.current && !refSearch.current.contains(event.target as HTMLDivElement)) {
      closeSearch();
    }
  });

  const keyboardIconActivation = (icon: string) => {
    if (icon === 'globe') {
      return onLanguageClick();
    }
    onSearchClick();
  };

  return (
    <Flex gap="24px">
      {navigationLinks &&
        navigationLinks.map(link => {
          if (link?.label === 'Languages') {
            return (
              <Flex
                position="relative"
                ref={refGlobe}
                key={link.sys.id}
                css={`
                  > svg:hover {
                    border: 2px solid;
                    border-radius: 4px;
                    border-color: ${backgroundIsWhite ? color.common.black : color.common.white};
                  }
                `}
              >
                <Globe
                  stroke={backgroundIsWhite ? 'black' : 'white'}
                  cursor="pointer"
                  onClick={onLanguageClick}
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      keyboardIconActivation('globe');
                    }
                  }}
                />
                {isLanguageMenuOpen && (
                  <Flex
                    position="absolute"
                    top="40px"
                    left="50%"
                    transform="translateX(-50%)"
                    width="130px"
                    zIndex={10}
                    justifyContent="center"
                    backgroundColor={backgroundIsWhite ? 'common-white' : 'common-black'}
                    borderRadius="6px"
                    border="2px solid"
                    borderColor={backgroundIsWhite ? 'common-black' : 'common-white'}
                  >
                    <Flex flexDirection="column" gap="8px" paddingY={8}>
                      {link.menuCollection?.items.map(subLink => (
                        <Link
                          key={subLink?.sys?.id}
                          textDecoration="none"
                          textColor={backgroundIsWhite ? 'common-black' : 'common-white'}
                          href={`${subLink?.link}${asPath}`}
                          locale={subLink?.description || ''}
                          onClick={() => closeLanguage()}
                        >
                          <Text hover={{ textColor: 'primary-900' }}>{subLink?.label}</Text>
                        </Link>
                      ))}
                    </Flex>
                  </Flex>
                )}
              </Flex>
            );
          } else if (link?.label === 'Login') {
            return (
              <Link
                href={link?.link || ''}
                color={backgroundIsWhite ? color.common.black : color.common.white}
                key={link.sys.id}
                css={`
                  > svg:hover {
                    border: 2px solid;
                    border-color: ${backgroundIsWhite ? color.common.black : color.common.white}
                    border-radius: 4px;
                  }
                `}
              >
                <User stroke={backgroundIsWhite ? 'black' : 'white'} cursor="pointer" />
              </Link>
            );
          }

          return;
        })}
    </Flex>
  );
};

export default DesktopIcons;

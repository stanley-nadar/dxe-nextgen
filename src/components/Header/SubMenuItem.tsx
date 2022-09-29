import { IMenuItem } from 'graphql/types';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentButton from 'components/Button/ComponentButton';

import retrieveImageData from 'utils/retrieveImageData';

import type { FC } from 'react';

interface SubMenuItem extends BasicProps {
  subLink?: IMenuItem | null;
  containsBlog?: boolean;
  isOpen?: boolean;
  closeDesktopMenu: () => void;
}

const SubMenuItem: FC<SubMenuItem> = ({ subLink, isOpen, closeDesktopMenu }) => {
  const imageData = subLink?.image && retrieveImageData(subLink.image);

  return (
    <Container as="li">
      <Link href={subLink?.link || ''} textDecoration="none" tabIndex={0} onClick={closeDesktopMenu}>
        <Container display={isOpen ? 'block' : 'none'}>
          <Flex
            key={subLink?.sys?.id}
            flexDirection="column"
            gap="4px"
            width="284px"
            xxxl={{ width: '320px' }}
            cursor="pointer"
            hover={{ textColor: 'primary-900' }}
          >
            {imageData && (
              <Flex borderRadius="24px">
                <Image src={imageData.src} alt={imageData.alt} width={imageData.width} height={imageData.height} />
              </Flex>
            )}
            <Text fontSize={18} fontWeight="semiBold" textColor="gray-900" hover={{ textColor: 'primary-900' }}>
              {subLink?.label}
            </Text>
            <Text textColor="gray-500" fontSize={16}>
              {subLink?.description}
            </Text>
            {subLink?.button && <ComponentButton paddingLeft={0} {...subLink.button} />}
          </Flex>
        </Container>
      </Link>
    </Container>
  );
};

export default SubMenuItem;

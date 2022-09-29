import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentButton from 'components/Button/ComponentButton';
import ButtonWrapper from 'components/RichText/ButtonWrapper';
import UnorderedList from 'components/UnorderedList/UnorderedList';

import retrieveImageData from 'utils/retrieveImageData';

import type { IComponentSwitcherItem } from 'graphql/types';
import type { FC } from 'react';

type SwitcherItemProps = BasicProps & Omit<IComponentSwitcherItem, 'sys' | 'contentfulMetadata'>;

const ComponentSwitcherItem: FC<SwitcherItemProps> = ({
  heading,
  subheading,
  primaryButton,
  secondaryButton,
  switcherItemImage,
  switcherItemList,
}) => {
  const switcherImageData = switcherItemImage && retrieveImageData(switcherItemImage);
  const switcherItemListCollection = switcherItemList?.listItemsCollection;

  return (
    <Flex flexDirection="column" gap="48px" justifyContent="center" md={{ flexDirection: 'row' }}>
      <Flex
        flexDirection="column"
        gap="16px"
        md={{ maxWidth: '400px' }}
        xl={{ maxWidth: '500px', alignSelf: 'center' }}
        xxxl={{ maxWidth: '610px', gap: '24px' }}
      >
        {heading && (
          <Heading as="h2" textStyle="sm" md={{ textStyle: 'md' }}>
            {heading}
          </Heading>
        )}
        <Flex flexDirection="column" gap="32px" md={{ alignItems: 'baseline' }}>
          {subheading && (
            <Text textStyle="lg" textColor="gray-600">
              {subheading}
            </Text>
          )}
          {switcherItemListCollection && <UnorderedList listItemsCollection={switcherItemListCollection} />}
          <ButtonWrapper>
            {primaryButton && <ComponentButton {...primaryButton} />}
            {secondaryButton && <ComponentButton {...secondaryButton} />}
          </ButtonWrapper>
        </Flex>
      </Flex>
      {switcherImageData && (
        <Flex lg={{ width: '40%' }} xxxl={{ width: '50%' }}>
          <Image
            src={switcherImageData?.src}
            width={switcherImageData?.width}
            height={switcherImageData?.height}
            alt={switcherImageData?.alt}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default ComponentSwitcherItem;

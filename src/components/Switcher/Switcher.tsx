import { FC, useState } from 'react';

import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentHeading from 'components/Heading/Heading';
import SwitcherItem from 'components/Switcher/SwitcherItem';

import type { IComponentSwitcher } from 'graphql/types';

type SwitcherProps = BasicProps & IComponentSwitcher;

const ComponentSwitcher: FC<SwitcherProps> = ({ headingComponent, switcherItemsCollection }) => {
  const [item, openItem] = useState(0);
  const switcherItemList = switcherItemsCollection?.items;

  return (
    <Flex flexDirection="column" gap="48px" paddingY={48} md={{ paddingY: 72, gap: '64px' }} lg={{ paddingY: 96 }}>
      <ComponentHeading
        backgroundIsDark={false}
        {...headingComponent}
        paddingY={0}
        md={{ paddingY: 0 }}
        lg={{ paddingY: 0 }}
      />
      <Flex flexDirection="column" gap="36px" md={{ gap: '48px' }}>
        <Flex width="100%" maxWidth="max-content" lg={{ alignSelf: 'center' }}>
          <Flex
            gap="32px"
            overflowX="scroll"
            paddingRight={32}
            lg={{ gap: '56px', paddingRight: 0 }}
            css={`
              margin-right: -32px;
              ::-webkit-scrollbar {
                width: 0;
              }
            `}
          >
            {switcherItemList?.map((switcherItem, index) => (
              <Text
                key={switcherItem?.sys.id}
                minWidth="fit-content"
                textStyle="lg"
                fontWeight="bold"
                cursor="pointer"
                onClick={() => openItem(index)}
                tabIndex={0}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openItem(index)}
                textColor={index === item ? 'primary-500' : 'gray-600'}
                borderBottom={index === item ? '3px solid' : ''}
                paddingBottom={4}
                borderBottomColor="common-black"
                focusVisible={{ paddingAll: 4, border: `2px solid ${color.primaryBlue[700]}` }}
              >
                {switcherItem?.switcherItemTitle}
              </Text>
            ))}
          </Flex>
        </Flex>
        {switcherItemList?.map(
          (switcherItem, index) => item === index && <SwitcherItem key={switcherItem?.sys?.id} {...switcherItem} />,
        )}
      </Flex>
    </Flex>
  );
};

export default ComponentSwitcher;

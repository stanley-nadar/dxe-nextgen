import { Coffee, HelpCircle, Map, Power, Slack } from 'react-feather';

import Icon, { iconValues } from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';

interface IconProps {
  /**
   * Takes any valid CSS color argument. STRONGLY recommended to avoid and use parent textColor
   */
  color: string;
  /**
   * Controls fill color for the icon. Takes any valid CSS color argument.
   */
  fill: string;
  /**
   * Takes a number or string value and outputs corresponding strokeWidth to the icon
   */
  strokeWidth: string | number;
  /**
   * Takes a number or string value and outputs corresponding size to the icon
   */
  size: string | number;
  /**
   * Creates accessible mouseover text for the icon.
   */
  title: string;
}

const StoryIcons = (props: IconProps) => (
  <Container>
    <Heading as="h4" marginBottom={48} fontWeight="bold">
      Base Icons
    </Heading>
    <Flex display="flex" flexWrap="wrap" gap="2rem" marginTop={48}>
      <HelpCircle {...props} />
      <Coffee {...props} />
      <Power {...props} />
      <Map {...props} />
      <Slack {...props} />
    </Flex>
    <Paragraph maxWidth="768px" textColor={{ light: 'gray-500', dark: 'gray-300' }} marginTop={48}>
      A complete searchable list of Feather Icons can be found{' '}
      <Link aria-label="feather-icon" href="https://feathericons.com/">
        here
      </Link>
    </Paragraph>
    <Heading as="h4" marginTop={20} marginBottom={20} fontWeight="bold">
      Freshworks Icons
    </Heading>
    <Paragraph maxWidth="768px" textColor={{ light: 'gray-500', dark: 'gray-300' }} marginTop={8} marginBottom={32}>
      A complete list of Freshworks Icons
    </Paragraph>
    <Flex
      display="flex"
      flexWrap="wrap"
      gap="2rem"
      marginTop={48}
      justifyContent="center"
      md={{ justifyContent: 'flex-start' }}
    >
      {iconValues.map(iconName => (
        <Flex
          key={iconName}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="250px"
          height="250px"
          border="1px solid"
          borderColor="gray-50"
          borderRadius="10px"
        >
          <Icon id={iconName} size={100} />
          <Paragraph textStyle="xl" marginTop={24}>
            {iconName}
          </Paragraph>
        </Flex>
      ))}
    </Flex>
  </Container>
);

export default StoryIcons;

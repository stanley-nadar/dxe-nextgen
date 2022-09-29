import { GetColorDefinition } from 'atoms/colors/colors';
import container from 'atoms/spacing/containers';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';

import { stringToKebabCase } from 'utils/functions';

import type { FC, ReactNode } from 'react';

interface SectionProps {
  id: string;
  internalName?: string | null;
  backgroundPath?: string;
  backgroundPriority?: boolean;
  backgroundGradient?: string;
  backgroundSectionColor?: GetColorDefinition;
  children: ReactNode;
}

const contentColumn = Number(container.xxl.slice(0, -2));
const totalMaxColumnPadding = 96 * 2;

export const sectionMaxWidth = `${contentColumn + totalMaxColumnPadding}px`;

export const sectionSizing = {
  maxWidth: sectionMaxWidth,
  width: '100%',
  paddingX: 16,
  sm: {
    paddingX: 32,
  },
  lg: {
    paddingX: 96,
  },
} as const;

const Section: FC<SectionProps> = ({
  id,
  internalName,
  backgroundPath,
  backgroundPriority,
  backgroundGradient,
  backgroundSectionColor,
  children,
}) => (
  <Flex
    as="section"
    id={stringToKebabCase(internalName || id)}
    position="relative"
    contain="content"
    justifyContent="center"
    width="100%"
    backgroundShorthand={backgroundGradient}
    backgroundColor={backgroundSectionColor}
  >
    {backgroundPath && (
      <Image src={backgroundPath} layout="fill" objectFit="cover" priority={backgroundPriority} alt="" zIndex={-1} />
    )}
    <Container {...sectionSizing}>{children}</Container>
  </Flex>
);
export default Section;

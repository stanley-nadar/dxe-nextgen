import { media } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';

import type { FC, ReactNode } from 'react';

interface ButtonWrapperProps {
  children?: ReactNode;
}

const ButtonWrapper: FC<ButtonWrapperProps> = ({ children }) => (
  <Flex
    flexDirection="column"
    flexWrap="nowrap"
    gap="16px"
    md={{ gap: '24px' }}
    justifyContent="center"
    width="100%"
    alignItems="center"
    className="button-wrapper"
    css={`
      &&& > a,
      &&& > button {
        padding-left: 24px;
        width: 100%;
      }
      ${media.sm} {
        &&& > a,
        &&& > button {
          width: initial;
        }
      }
    `}
    sm={{
      flexDirection: 'row',
      width: 'unset',
    }}
  >
    {children}
  </Flex>
);

export default ButtonWrapper;

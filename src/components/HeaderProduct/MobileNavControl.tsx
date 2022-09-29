import { FC, useCallback } from 'react';
import { Menu, X } from 'react-feather';

import Container from 'quarks/Container';

interface MobileNavControlProps {
  isMobileNavOpen: boolean;
  onSetMobileNavOpen: (open: boolean) => void;
}

const MobileNavControl: FC<MobileNavControlProps> = ({ isMobileNavOpen, onSetMobileNavOpen }) => {
  const handleNavOpen = useCallback((open: boolean) => onSetMobileNavOpen(open), [onSetMobileNavOpen]);

  return (
    <Container marginTop={4} xl={{ display: 'none' }}>
      {isMobileNavOpen ? (
        <X
          css={{ outline: 'none' }}
          cursor="pointer"
          onClick={() => handleNavOpen(!isMobileNavOpen)}
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNavOpen(!isMobileNavOpen);
            }
          }}
        />
      ) : (
        <Menu
          css={{ outline: 'none' }}
          cursor="pointer"
          onClick={() => handleNavOpen(!isMobileNavOpen)}
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNavOpen(!isMobileNavOpen);
            }
          }}
        />
      )}
    </Container>
  );
};

export default MobileNavControl;

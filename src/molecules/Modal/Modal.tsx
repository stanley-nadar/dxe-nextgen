import MuiModal from '@mui/material/Modal';
import { FC, ReactNode, useRef } from 'react';
import { useClickAway } from 'react-use';
import styled from 'styled-components';

import Container from 'quarks/Container';
import Grid from 'quarks/Grid';
import type { GridProps } from 'quarks/interpolations/grid';

const StyledModal = styled(MuiModal)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
  }
`;

interface ModalProps extends GridProps {
  /**
   * if true, the modal will be open
   */
  open: boolean;
  /**
   * Callback function for closing the modal.
   */
  onClose: () => void;

  /**
   * Modal is the only molecule that has children.
   */
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, children, ...props }) => {
  const centerBox = useRef<HTMLDivElement | null>(null);
  useClickAway(centerBox, () => onClose());

  return (
    <StyledModal open={open} onClose={onClose}>
      <Grid placeItems="center" height="100vh">
        <Container width="100%" maxWidth="1440px" position="relative" ref={centerBox} {...props}>
          <Container
            role="button"
            cursor="pointer"
            position="absolute"
            transform="rotate(45deg)"
            top="-40px"
            right="0"
            lg={{ right: '-30px' }}
            onClick={onClose}
          ></Container>
          {children}
        </Container>
      </Grid>
    </StyledModal>
  );
};

export default Modal;

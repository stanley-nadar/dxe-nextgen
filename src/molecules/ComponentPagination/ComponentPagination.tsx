import useTranslation from 'next-translate/useTranslation';
import { FC, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import Flex from 'quarks/Flex';

import Dots from 'molecules/ComponentPagination/Dots';
import IconButton from 'molecules/IconButton/IconButton';

interface ComponentPaginationProps {
  /**
   * if `true`, arrows will show up.
   */
  isWithArrow?: boolean;
  /**
   * Determines between light or dark style dots.
   */
  variant?: 'light' | 'dark';
  /**
   * The current active dot.
   */
  activeDot?: number;
  /**
   * The number of dots to generate.
   */
  dotsCount?: number;
  /**
   * Callback to set active dot.
   * @param dot number
   */
  onSetActiveDot: (dot: number) => void;
  /**
   * Callback fired when left arrow is clicked.
   */
  onLeftArrowClick: () => void;
  /**
   * Callback fired when right arrow is clicked.
   */
  onRightArrowClick: () => void;
}

const dotsColors = {
  light: 'gray-200',
  dark: 'gray-700',
} as const;

const ComponentPagination: FC<ComponentPaginationProps> = ({
  isWithArrow = true,
  variant = 'light',
  activeDot,
  dotsCount,
  onSetActiveDot,
  onLeftArrowClick,
  onRightArrowClick,
}) => {
  const { t } = useTranslation('common');
  const color = dotsColors[variant];

  const handleRightArrowClick = useCallback(() => onRightArrowClick(), [onRightArrowClick]);
  const handleLeftArrowClick = useCallback(() => onLeftArrowClick(), [onLeftArrowClick]);
  const handleActiveDot = useCallback((dotIndex: number) => onSetActiveDot(dotIndex), [onSetActiveDot]);

  return (
    <Flex gap="32px" justifyContent="center" alignItems="center">
      {isWithArrow && (
        <IconButton
          tabIndex={0}
          textColor="gray-900"
          aria-label={t('left')}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleLeftArrowClick}
          onClick={handleLeftArrowClick}
        >
          <ChevronLeft />
        </IconButton>
      )}
      <Flex gap="16px">
        {[...Array(dotsCount).keys()]?.map((_, index: number) =>
          index === activeDot ? (
            <Dots isActive color="gray-900" onClick={() => handleActiveDot(index)} />
          ) : (
            <Dots
              color={color}
              onKeyDown={e => e.key === 'Enter' && handleActiveDot(index)}
              onClick={() => handleActiveDot(index)}
            />
          ),
        )}
      </Flex>
      {isWithArrow && (
        <IconButton
          tabIndex={0}
          textColor="gray-900"
          onKeyDown={e => e.key === 'Enter' && handleRightArrowClick}
          aria-label={t('right')}
          onClick={handleRightArrowClick}
        >
          <ChevronRight />
        </IconButton>
      )}
    </Flex>
  );
};

export default ComponentPagination;

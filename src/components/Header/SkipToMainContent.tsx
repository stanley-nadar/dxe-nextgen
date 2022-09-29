import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import { GetColorDefinition } from 'atoms/colors/colors';

import ComponentButton from 'components/Button/ComponentButton';

interface SkipToMainContentProps {
  backgroundColor: GetColorDefinition;
  textColor: GetColorDefinition;
}

const SkipToMainContent: FC<SkipToMainContentProps> = ({ backgroundColor, textColor }) => {
  const { t } = useTranslation('common');

  return (
    <ComponentButton
      tabIndex={0}
      link="#main-content"
      label={t('skipToMainContent')}
      variant="outlined"
      hierarchy="Tertiary Gray"
      backgroundColor={backgroundColor}
      textColor={textColor}
      cursor="pointer"
      position="absolute"
      left="-250px"
      opacity={0}
      top="4px"
      zIndex={9999}
      focusVisible={{ opacity: 1, left: '8px' }}
      transition="opacity 0.2s ease"
    />
  );
};

export default SkipToMainContent;

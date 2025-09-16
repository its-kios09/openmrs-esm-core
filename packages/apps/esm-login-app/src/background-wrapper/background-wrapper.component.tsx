import React from 'react';
import styles from './background-wrapper.scss';
import { useConfig } from '@openmrs/esm-framework';
import { useTranslation } from 'react-i18next';

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const { t } = useTranslation();
  const { backgroundImage } = useConfig();

  const backgroundSrc = backgroundImage?.src;
  const backgroundAlt = backgroundImage?.alt || '';
  const showCenteredLogin = backgroundImage?.showCenteredLogin;

  function renderBackground() {
    if (backgroundSrc) {
      return <img src={backgroundSrc} alt={backgroundAlt} className={styles.backgroundImage} />;
    } else {
      return (
        <svg role="img" className={styles.backgroundImage}>
          <title>{t('openmrsLogo', 'OpenMRS logo')}</title>
          <use href="#omrs-logo-full-color"></use>
        </svg>
      );
    }
  }

  return showCenteredLogin ? (
    <div className={styles.centeredLoginBackgroundContainer}>
      <div
        style={{
          backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined,
        }}
        className={styles.centeredLoginOverlay}
      >
        {!backgroundSrc && (
          <svg role="img" className={styles.backgroundSvg}>
            <title>{t('openmrsLogo', 'OpenMRS logo')}</title>
            <use href="#omrs-logo-full-color"></use>
          </svg>
        )}
      </div>
      <div className={styles.contentOverlay}>{children}</div>
    </div>
  ) : (
    <>
      {renderBackground()}
      <div className={styles.backgroundContainer}>
        <div className={styles.contentOverlay}>{children}</div>
      </div>
    </>
  );
};

export default BackgroundWrapper;

import React from 'react';
import styles from './background-wrapper.scss';
import { useConfig } from '@openmrs/esm-framework';

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const { backgroundImage } = useConfig();

  const backgroundSrc = backgroundImage?.src;
  const backgroundAlt = backgroundImage?.alt || 'Background Image';
  const showCenteredLogin = backgroundImage?.showCenteredLogin;
  const fallbackImage = '/openmrs/spa/background.png';

  return showCenteredLogin ? (
    <div className={styles.centeredLoginBackgroundContainer}>
      <div
        style={{
          backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined,
        }}
        className={styles.centeredLoginOverlay}
      />
      <div className={styles.contentOverlay}>{children}</div>
    </div>
  ) : (
    <>
      <img src={backgroundSrc || fallbackImage} alt={backgroundAlt} className={styles.backgroundImage} />
      <div className={styles.backgroundContainer}>
        <div className={styles.contentOverlay}>{children}</div>
      </div>
    </>
  );
};

export default BackgroundWrapper;

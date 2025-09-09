import React from 'react';
import { interpolateUrl, useConfig } from '@openmrs/esm-framework';
import { type TFunction } from 'react-i18next';
import { type ConfigSchema } from '../config-schema';

const Flag: React.FC<{ t: TFunction }> = ({ t }) => {
  const { flag } = useConfig<ConfigSchema>();
  return flag.src ? (
    <img alt={flag.alt ? t(flag.alt) : t('openmrsLogo', 'OpenMRS logo')} src={interpolateUrl(flag.src)} />
  ) : (
    <svg role="img">
      <title>{t('openmrsLogo', 'OpenMRS logo')}</title>
      <use href="#omrs-logo-full-color"></use>
    </svg>
  );
};

export default Flag;

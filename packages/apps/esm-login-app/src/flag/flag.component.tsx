import React from 'react';
import { interpolateUrl, useConfig } from '@openmrs/esm-framework';
import { type ConfigSchema } from '../config-schema';
import { useTranslation } from 'react-i18next';

const Flag: React.FC = () => {
  const { flag } = useConfig<ConfigSchema>();
  const { t } = useTranslation();
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

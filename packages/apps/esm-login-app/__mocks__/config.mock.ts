import { type ConfigSchema } from '../src/config-schema';

export const mockConfig: ConfigSchema = {
  provider: {
    type: 'basic',
    loginUrl: '',
    logoutUrl: '',
  },
  chooseLocation: {
    enabled: true,
    numberToShow: 3,
    useLoginLocationTag: true,
    locationsPerRequest: 50,
  },
  logo: {
    src: null,
    alt: 'Logo',
  },
  backgroundImage: {
    src: null,
    alt: 'Background Image',
  },
  flag: {
    src: null,
    alt: 'Flag Image',
  },
  links: {
    loginSuccess: '${openmrsSpaBase}/home',
  },
  footer: {
    additionalLogos: [],
  },
  showPasswordOnSeparateScreen: true,
};

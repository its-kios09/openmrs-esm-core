import { mutate } from 'swr';
import { clearCurrentUser, openmrsFetch, refetchCurrentUser, restBaseUrl } from '@openmrs/esm-framework';

export async function performLogout() {
  const currentLanguage = localStorage.getItem('i18nextLng') || sessionStorage.getItem('i18nextLng');

  await openmrsFetch(`${restBaseUrl}/session`, {
    method: 'DELETE',
  });

  // Clear the SWR cache on logout, do not revalidate
  mutate(() => true, undefined, { revalidate: false });

  clearCurrentUser();

  if (currentLanguage) {
    localStorage.setItem('i18nextLng', currentLanguage);
  }

  // await refetchCurrentUser();
}

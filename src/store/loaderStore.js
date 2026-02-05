import { atom } from 'nanostores';

export const isGlobalLoading = atom(false);

export function showLoader() {
  isGlobalLoading.set(true);
}

export function hideLoader() {
  isGlobalLoading.set(false);
}

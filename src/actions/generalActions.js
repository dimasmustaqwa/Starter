import { generalConstants } from '@/constants';

const showSidenav = (status) => {
  return { type: generalConstants.SHOW_SIDENAV, isOpen: status };
}

export const generalActions = {
  showSidenav
}
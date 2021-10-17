import { loadContent } from './loadContent';

export const navigateTo = (route: string): void => {
  const location = [
    {
      path: '/',
    },
    {
      path: '/score',
    },
    {
      path: '/settings',
    },
    {
      path: '/game',
    },
  ];

  const routeInfo = location.find((item) => {
    return item.path === route;
  });

  if (routeInfo) {
    window.history.pushState(null, '', routeInfo.path);

    loadContent(routeInfo.path);
  }
};

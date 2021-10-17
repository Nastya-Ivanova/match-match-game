export const createDataBase = (): void => {
  const requestOpen = window.indexedDB.open('Nastya-Ivanova', 1);

  requestOpen.onupgradeneeded = () => {
    const db = requestOpen.result;

    const store = db.createObjectStore('Players', { autoIncrement: true });
    store.createIndex('score', 'score');

    db.createObjectStore('SettingCards', { autoIncrement: true });

    db.createObjectStore('SettingDifficulty', { autoIncrement: true });
  };
};

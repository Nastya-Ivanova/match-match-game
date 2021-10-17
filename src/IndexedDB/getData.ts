export const getData = (
  onsuccess: (dataObj: { [index: string]: string | number }) => void
): void => {
  const requestOpen = window.indexedDB.open('Nastya-Ivanova', 1);

  requestOpen.onsuccess = () => {
    const db = requestOpen.result;
    const tx = db.transaction('Players', 'readonly');
    const store = tx.objectStore('Players');
    const index = store.index('score');

    const requestGetData = index.openCursor();

    requestGetData.onsuccess = () => {
      const cursor = requestGetData.result;

      if (cursor) {
        onsuccess(cursor.value);
        cursor.continue();
      }
    };

    tx.oncomplete = () => {
      db.close();
    };
  };
};

import { navigateTo } from 'Router/utils/navigateTo';

export const addData = (dataObj: { [index: string]: string | number | ArrayBuffer }): void => {
  const requestOpen = window.indexedDB.open('Nastya-Ivanova', 1);

  requestOpen.onsuccess = () => {
    const db = requestOpen.result;
    const tx = db.transaction('Players', 'readwrite');
    const store = tx.objectStore('Players');

    const data = {
      firstname: dataObj.firstname,
      lastname: dataObj.lastname,
      email: dataObj.email,
      score: dataObj.score,
      file: dataObj.file,
    };
    store.add(data);

    tx.oncomplete = () => {
      db.close();
      navigateTo('/score');
    };
  };
};

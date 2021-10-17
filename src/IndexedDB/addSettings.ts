import { TypesOfCards, TypesOfDifficulty } from 'type';

export const addSettings = (value: string, objectStore: string): void => {
  let savedData = value;
  const requestOpen = window.indexedDB.open('Nastya-Ivanova', 1);

  requestOpen.onsuccess = () => {
    const db = requestOpen.result;
    const tx = db.transaction(objectStore, 'readwrite');
    const store = tx.objectStore(objectStore);

    if (savedData === 'select game cards type') {
      savedData = TypesOfCards.food;
    } else if (savedData === 'select game type') {
      savedData = TypesOfDifficulty.difficult4;
    }

    const data = {
      value: savedData,
    };
    store.add(data);

    tx.oncomplete = () => {
      db.close();
    };
  };
};

import { TypesOfCards } from 'type';

export const getSettings = (
  onsuccess: (cursorCards: TypesOfCards, cursorDifficulty: number) => void
): void => {
  const requestOpen = window.indexedDB.open('Nastya-Ivanova', 1);

  requestOpen.onsuccess = () => {
    const db = requestOpen.result;

    const txDifficulty = db.transaction('SettingDifficulty', 'readonly');
    const storeDifficulty = txDifficulty.objectStore('SettingDifficulty');
    const requestDifficulty = storeDifficulty.openCursor(null, 'prev');

    requestDifficulty.onsuccess = () => {
      const cursorDifficulty = requestDifficulty.result;

      const difficulty: number = cursorDifficulty
        ? parseInt(cursorDifficulty.value.value, 10) ** 2 / 2
        : 8;

      const txCards = db.transaction('SettingCards', 'readonly');
      const storeCards = txCards.objectStore('SettingCards');
      const requestCards = storeCards.openCursor(null, 'prev');

      requestCards.onsuccess = () => {
        const cursorCards = requestCards.result;

        const typeCards: TypesOfCards = cursorCards ? cursorCards.value.value : TypesOfCards.food;
        onsuccess(typeCards, difficulty);
      };
    };
  };
};

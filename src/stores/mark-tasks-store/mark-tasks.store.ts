import { autorun, makeAutoObservable } from 'mobx';
import { MarkTypes } from '../../typescript/enums/mark-types';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/local-storage-helper';
import { LocalStorageKeys } from '../../typescript/enums/local-storage-keys';

class MarkTasksStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentType: MarkTypes = loadFromLocalStorage(LocalStorageKeys.MarkTypes) || MarkTypes.Default;

  changeCurrentMark = (newSort: MarkTypes) => {
    if (this.currentType === newSort) {
      this.currentType = MarkTypes.Default;
    } else {
      this.currentType = newSort;
    }
    console.log(this.currentType);
  };
}

export const markTasksStore = new MarkTasksStore();

autorun(() => {
  saveToLocalStorage(LocalStorageKeys.MarkTypes, markTasksStore.currentType);
});

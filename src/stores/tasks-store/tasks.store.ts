import { autorun, makeAutoObservable } from 'mobx';
import { Task } from '../../typescript/models/task';
import { createNewTask } from './helpers';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/local-storage-helper';
import { LocalStorageKeys } from '../../typescript/enums/local-storage-keys';

class TasksStore {
  constructor() {
    makeAutoObservable(this);
  }

  tasks: Task[] = loadFromLocalStorage(LocalStorageKeys.Tasks);

  get allTasks() {
    return this.tasks;
  }

  completeTodoItem = (id: string) => {
    const currentTask = this.tasks.find((task) => task.id === id);
    if (currentTask) {
      this.removeTodoItem(currentTask.id);
      this.tasks.push(currentTask);
      currentTask.completed = !currentTask.completed;
    }
  };

  addTodoItem = (taskText: string) => taskText && this.tasks.push(createNewTask(taskText));

  removeTodoItem = (id: string) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };

  removeLastTask = () => {
    this.tasks.pop();
  };

  removeFirstTask = () => {
    this.tasks.shift();
  };
}

export const tasksStore = new TasksStore();

autorun(() => {
  saveToLocalStorage(LocalStorageKeys.Tasks, tasksStore.tasks);
});

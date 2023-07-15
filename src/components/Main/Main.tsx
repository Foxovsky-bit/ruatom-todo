import styles from './Main.module.scss';
import { TasksList } from './components/TasksList/TasksList';
import { AddTaskInput } from './components/AddTaskInput/AddTaskInput';
import { TasksActions } from './components/TasksActions/TasksActions';

export const Main = () => {
  return (
    <main className={styles.main}>
      <TasksActions />
      <AddTaskInput />
      <TasksList />
    </main>
  );
};

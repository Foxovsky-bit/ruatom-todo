import { observer } from 'mobx-react-lite';
import { tasksStore } from '../../../../stores/tasks-store/tasks.store';
import styles from './TasksActions.module.scss';
import { markTasksStore } from '../../../../stores/mark-tasks-store/mark-tasks.store';
import { MarkTypes } from '../../../../typescript/enums/mark-types';

export const TasksActions = observer(() => {
  return (
    <div className={styles.actionButtons}>
      <button
        className={styles.action}
        onClick={() => markTasksStore.changeCurrentMark(MarkTypes.Even)}>
        Выделить четные
      </button>
      <button
        className={styles.action}
        onClick={() => markTasksStore.changeCurrentMark(MarkTypes.Odd)}>
        Выделить нечетные
      </button>
      <button onClick={() => tasksStore.removeLastTask()} className={styles.action}>
        Удалить последний
      </button>
      <button onClick={() => tasksStore.removeFirstTask()} className={styles.action}>
        Удалить первый
      </button>
    </div>
  );
});

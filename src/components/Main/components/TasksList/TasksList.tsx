import { observer } from 'mobx-react-lite';
import styles from './TasksList.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { tasksStore } from '../../../../stores/tasks-store/tasks.store';
import { Typography } from '@mui/material';
import cn from 'classnames';
import { markTasksStore } from '../../../../stores/mark-tasks-store/mark-tasks.store';

export const TasksList = observer(() => {
  const tasks = tasksStore.allTasks;
  const markTasks = markTasksStore;

  return (
    <List className={styles.tasksList}>
      {tasks.length ? (
        tasks.map((task, index) => {
          const labelId = `tasks-list-label-${task.id}`;
          return (
            <ListItem
              className={cn(
                styles.task,
                markTasks.currentType === 'Even' && (index + 1) % 2 === 0 && styles.even,
                markTasks.currentType === 'Odd' && (index + 1) % 2 === 1 && styles.odd
              )}
              key={task.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="remove"
                  onClick={() => tasksStore.removeTodoItem(task.id)}>
                  <CancelIcon />
                </IconButton>
              }
              disablePadding>
              <ListItemButton
                role={undefined}
                onClick={() => tasksStore.completeTodoItem(task.id)}
                dense>
                <ListItemIcon>
                  <Checkbox
                    color={'default'}
                    edge="start"
                    checked={task.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  className={cn(task.completed && styles.completed)}
                  id={labelId}
                  primary={task.text}
                />
              </ListItemButton>
            </ListItem>
          );
        })
      ) : (
        <Typography className={styles.placeHolder} variant="h3" component="h3">
          Нет задач
        </Typography>
      )}
    </List>
  );
});

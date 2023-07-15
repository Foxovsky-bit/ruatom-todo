import { Task } from '../../typescript/models/task';

const generateId = (text: string) => `${Date.now()}-${text}`;

export const createNewTask = (text: string): Task => {
  const id = generateId(text);

  return { id, text, completed: false };
};

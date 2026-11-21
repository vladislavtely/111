import type { Task } from './types.ts';

export function formatTask(task: Task): string {
  const marker = task.done ? '[x]' : '[ ]';
  return marker + ' ' + task.title;
}

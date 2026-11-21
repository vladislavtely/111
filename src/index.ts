import { formatTask } from './format.ts';
import { tasks } from './tasks.ts';

console.log(tasks.map(formatTask).join('\n'));

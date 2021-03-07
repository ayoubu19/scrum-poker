import { Topic } from './topic';
import { User } from './user';

export interface Room {
  roomId?: number;
  roomTitle?: string;
  moderator?: User;
  team?: User[];
  topics?: Topic[];
  voteMode?: string;
}

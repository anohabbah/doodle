import {Survey} from './survey';
import {User} from './user';

export class Meeting {
  pause?: false;
  surveys?: Survey[];
  participants?: User[];
  creator?: User;

  constructor(public title: string, public summary: string, public id?: number) {
  }
}

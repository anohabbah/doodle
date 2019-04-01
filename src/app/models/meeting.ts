import {Survey} from './survey';

export class Meeting {
  pause?: false;
  surveys?: Survey[];

  constructor(public title: string, public summary: string, public id?: number) {
  }
}

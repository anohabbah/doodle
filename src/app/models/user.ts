import {Meeting} from './meeting';

export class User {
  meetings?: Meeting[];

  constructor(public lastName: string, public firstName: string, public email: string) {
  }
}

import { title } from 'process';

export class Course {

  public static Null: Course = {_id: '', title: '', description: '', image: '', modules: []};

  _id: string;
  title: string;
  description: string;
  image: string;
  modules?: [];
}

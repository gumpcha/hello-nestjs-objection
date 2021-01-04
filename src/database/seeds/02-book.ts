import * as Knex from 'knex';
import { BookModel } from '../models/book.model';

export async function seed(knex: Knex): Promise<any> {
  await BookModel.query(knex).insert([
    {
      name: 'name-1',
    },
    {
      name: 'name-2',
    },
    {
      name: 'name-3',
    },
  ]);
}

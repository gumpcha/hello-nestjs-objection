import * as Knex from 'knex';
import { UserModel } from '../models/user.model';

export async function seed(knex: Knex): Promise<any> {
  const users = await UserModel.query(knex).select();
  await UserModel.query(knex).insert([
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

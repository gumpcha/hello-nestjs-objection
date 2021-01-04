import * as Knex from 'knex';
import { ReviewModel } from '../models/review.model';

export async function seed(knex: Knex): Promise<any> {
  await ReviewModel.query(knex).insert([
    {
      user_id: 1,
      book_id: 1,
      comment: 'good',
    },
    {
      user_id: 1,
      book_id: 2,
      comment: 'bad',
    },
    {
      user_id: 1,
      book_id: 3,
      comment: 'so so',
    },
  ]);
}

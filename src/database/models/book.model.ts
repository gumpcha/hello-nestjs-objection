import { Model } from 'objection';
import { BaseModel } from './base.model';

export class BookModel extends BaseModel {
  static tableName = 'book';

  name: string;

  static relationMappings = {
    reviews: {
      modelClass: `${__dirname}/review.model`,
      relation: Model.HasManyRelation,
      join: {
        from: 'book.id',
        to: 'review.book_id',
      },
    },
  };
}

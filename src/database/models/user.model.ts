import { Model } from 'objection';
import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  static tableName = 'user';

  name: string;

  static relationMappings = {
    reviews: {
      modelClass: `${__dirname}/review.model`,
      relation: Model.HasManyRelation,
      join: {
        from: 'user.id',
        to: 'review.user_id',
      },
    },
  };
}

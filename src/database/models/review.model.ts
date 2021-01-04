import { BaseModel } from './base.model';

export class ReviewModel extends BaseModel {
  static tableName = 'review';

  user_id: number;
  book_id: number;
  comment: string;
}

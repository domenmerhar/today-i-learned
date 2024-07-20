import { CategoryType } from '../category.type';

export class CreateFactDto {
  description: string;

  source: string;

  category: CategoryType;
}

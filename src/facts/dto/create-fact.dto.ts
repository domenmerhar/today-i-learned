import { CategoryEnum } from '../category.enum';

export class CreateFactDto {
  description: string;

  source: string;

  category: CategoryType;
}

type CategoryType =
  | CategoryEnum.TECHNOLOGY
  | CategoryEnum.SCIENCE
  | CategoryEnum.FINANCE
  | CategoryEnum.SOCIETY
  | CategoryEnum.ENTERTAINMENT
  | CategoryEnum.HEALTH
  | CategoryEnum.HISTORY
  | CategoryEnum.NEWS;

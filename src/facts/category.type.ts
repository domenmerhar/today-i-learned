import { CategoryEnum } from './category.enum';

export type CategoryType =
  | CategoryEnum.TECHNOLOGY
  | CategoryEnum.SCIENCE
  | CategoryEnum.FINANCE
  | CategoryEnum.SOCIETY
  | CategoryEnum.ENTERTAINMENT
  | CategoryEnum.HEALTH
  | CategoryEnum.HISTORY
  | CategoryEnum.NEWS;

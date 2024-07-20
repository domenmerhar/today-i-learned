import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CategoryEnum } from '../category.enum';

@ValidatorConstraint({ name: 'IsCategory', async: false })
export class IsCategory implements ValidatorConstraintInterface {
  private readonly allowedCategories = Object.values(CategoryEnum).filter(
    (category: string) => category !== 'all',
  );

  validate(text: CategoryEnum) {
    return this.allowedCategories.includes(text);
  }

  defaultMessage() {
    return `Category be one of the following values: ${this.allowedCategories.join(', ')}`;
  }
}

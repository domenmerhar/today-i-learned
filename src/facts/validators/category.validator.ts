import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CategoryEnum } from '../category.enum';

@ValidatorConstraint({ name: 'IsCategory', async: false })
export class IsCategory implements ValidatorConstraintInterface {
  validate(text: string) {
    return (Object.values(CategoryEnum) as string[]).includes(text);
  }

  defaultMessage() {
    return `Category be one of the following values: ${Object.values(CategoryEnum).join(', ')}`;
  }
}

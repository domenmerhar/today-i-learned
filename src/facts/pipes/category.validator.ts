import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { CategoryEnum } from '../category.enum';

@Injectable()
export class CategoryValidationPippe implements PipeTransform {
  readonly allowedStatuses = Object.values(CategoryEnum);

  transform(value: string) {
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(
        `${value} should be one of the following values: ${this.allowedStatuses.join(', ')}`,
      );
    }

    return value;
  }

  private isStatusValid(status) {
    if (!status) return true;

    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}

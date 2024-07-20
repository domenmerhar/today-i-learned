import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { VoteEnum } from '../vote.enum';

@Injectable()
export class VoteValidationPipe implements PipeTransform {
  readonly allowedStatuses = Object.values(VoteEnum);

  transform(value: string) {
    value = value.toLowerCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(
        `${value} should be one of the following values: ${this.allowedStatuses.join(', ')}`,
      );
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}

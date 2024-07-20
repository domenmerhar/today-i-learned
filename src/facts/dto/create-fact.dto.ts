import { IsNotEmpty, Matches, MaxLength, Validate } from 'class-validator';
import { CategoryType } from '../category.type';
import { IsCategory } from '../validators/category.validator';

export class CreateFactDto {
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @Matches(
    'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)',
    '',
    { message: 'Invalid URL' },
  )
  source: string;

  @Validate(IsCategory)
  category: CategoryType;
}

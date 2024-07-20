import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEnum } from './category.enum';

@Entity()
export class Fact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  description: string;

  @Column()
  source: string;

  @Column()
  category: CategoryType;

  @Column()
  likes: number;

  @Column()
  mindblownVotes: number;

  @Column()
  falseVotes: number;
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

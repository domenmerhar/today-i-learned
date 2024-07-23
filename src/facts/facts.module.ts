import { Module } from '@nestjs/common';
import { FactsService } from './facts.service';
import { FactsController } from './facts.controller';
import { FactsRepository } from './facts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fact } from './fact.entity';
import { IsCategory } from './validators/category.validator';
import { VoteValidationPipe } from './pipes/vote.validator';
import { CategoryValidationPippe } from './pipes/category.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Fact])],
  controllers: [FactsController],
  providers: [
    FactsService,
    FactsRepository,
    IsCategory,
    VoteValidationPipe,
    CategoryValidationPippe,
  ],
})
export class FactsModule {}

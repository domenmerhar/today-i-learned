import { Module } from '@nestjs/common';
import { FactsService } from './facts.service';
import { FactsController } from './facts.controller';
import { FactsRepository } from './facts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fact } from './fact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fact])],
  controllers: [FactsController],
  providers: [FactsService, FactsRepository],
})
export class FactsModule {}

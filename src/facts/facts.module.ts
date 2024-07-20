import { Module } from '@nestjs/common';
import { FactsService } from './facts.service';
import { FactsController } from './facts.controller';
import { FactsRepository } from './facts.repository';

@Module({
  controllers: [FactsController],
  providers: [FactsService, FactsRepository],
})
export class FactsModule {}

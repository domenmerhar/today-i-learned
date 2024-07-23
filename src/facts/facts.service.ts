import { Injectable } from '@nestjs/common';
import { CreateFactDto } from './dto/create-fact.dto';
import { FactsRepository } from './facts.repository';
import { Fact } from './fact.entity';
import { VoteEnum } from './vote.enum';
import { CategoryType } from './category.type';

@Injectable()
export class FactsService {
  constructor(private readonly factsRepository: FactsRepository) {}

  async createFact(createFactDto: CreateFactDto): Promise<Fact> {
    return this.factsRepository.createFact(createFactDto);
  }

  async findAll(category: CategoryType): Promise<Fact[]> {
    return this.factsRepository.findAll(category);
  }

  addVote(id: string, vote: VoteEnum): Promise<Fact> {
    return this.factsRepository.addVote(id, vote);
  }

  removeVote(id: string, vote: VoteEnum): Promise<Fact> {
    return this.factsRepository.removeVote(id, vote);
  }

  removeFact(id: string): Promise<string> {
    return this.factsRepository.removeFact(id);
  }
}

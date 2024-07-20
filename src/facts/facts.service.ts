import { Injectable } from '@nestjs/common';
import { CreateFactDto } from './dto/create-fact.dto';
import { FactsRepository } from './facts.repository';
import { Fact } from './fact.entity';

@Injectable()
export class FactsService {
  constructor(private readonly factsRepository: FactsRepository) {}

  async createFact(createFactDto: CreateFactDto): Promise<Fact> {
    return this.factsRepository.createFact(createFactDto);
  }

  async findAll(): Promise<Fact[]> {
    return this.factsRepository.findAll();
  }

  addVote(id: number, category: string): unknown {
    return this.factsRepository.addVote(id, category);
  }

  removeVote(id: number, category: string): unknown {
    return this.factsRepository.removeVote(id, category);
  }

  remove(id: number) {
    return this.factsRepository.removeT(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateFactDto } from './dto/create-fact.dto';
import { FactsRepository } from './facts.repository';
import { Fact } from './fact.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class FactsService {
  constructor(private readonly factsRepository: FactsRepository) {}

  async createFact(createFactDto: CreateFactDto): Promise<Fact> {
    return this.factsRepository.createFact(createFactDto);
  }

  async findAll(): Promise<Fact[]> {
    return this.factsRepository.findAll();
  }

  addVote(id: string, categoryDto: CategoryDto): Promise<Fact> {
    return this.factsRepository.addVote(id, categoryDto);
  }

  removeVote(id: string, categoryDto: CategoryDto): Promise<Fact> {
    return this.factsRepository.removeVote(id, categoryDto);
  }

  remove(id: number) {
    return this.factsRepository.removeT(id);
  }
}

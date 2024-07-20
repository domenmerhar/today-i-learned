import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Fact } from './fact.entity';
import { CreateFactDto } from './dto/create-fact.dto';

@Injectable()
export class FactsRepository extends Repository<Fact> {
  constructor(private readonly dataSource: DataSource) {
    super(Fact, dataSource.createEntityManager());
  }

  async createFact(createFactDto: CreateFactDto): Promise<Fact> {
    const { category, description, source } = createFactDto;

    const fact = await this.save({
      category: category,
      description,
      source,
      likes: 0,
      mindblownVotes: 0,
      falseVotes: 0,
    });

    return fact;
  }

  async findAll(): Promise<Fact[]> {
    return this.find();
  }

  addVote(id: number, category: string): unknown {
    return `This action adds vote for fact #${id} ${category}`;
  }

  removeVote(id: number, category: string): unknown {
    return `This action removes vote for fact #${id} ${category}`;
  }

  removeT(id: number) {
    return `This action removes a #${id} fact`;
  }
}

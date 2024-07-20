import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Fact } from './fact.entity';
import { CreateFactDto } from './dto/create-fact.dto';
import { CategoryDto } from './dto/category.dto';

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

  async findFact(id: string): Promise<Fact> {
    const fact = await this.findOneOrFail({ where: { id } });
    if (!fact) throw new NotFoundException(`Fact with id ${id} not found`);

    return fact;
  }

  async findAll(): Promise<Fact[]> {
    return this.find();
  }

  async addVote(id: string, categoryDto: CategoryDto): Promise<Fact> {
    const fact = await this.findFact(id);
    fact[categoryDto.category] += 1;

    try {
      await this.save(fact);
    } catch {
      throw new InternalServerErrorException('Failed to save the vote');
    }

    return fact;
  }

  async removeVote(id: string, categoryDto: CategoryDto): Promise<Fact> {
    const fact = await this.findFact(id);
    fact[categoryDto.category] -= 1;

    try {
      await this.save(fact);
    } catch {
      throw new InternalServerErrorException('Failed to save the vote');
    }

    return fact;
  }

  async removeFact(id: string): Promise<string> {
    await this.delete({ id });
    return 'Fact removed';
  }
}

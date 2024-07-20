import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Fact } from './fact.entity';
import { CreateFactDto } from './dto/create-fact.dto';

@Injectable()
export class FactsRepository extends Repository<Fact> {
  constructor(private readonly dataSource: DataSource) {
    super(Fact, dataSource.createEntityManager());
  }

  createT(createFactDto: CreateFactDto) {
    return 'This action adds a new fact';
  }

  findAll() {
    return `This action returns all facts`;
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

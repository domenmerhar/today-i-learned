import { Injectable } from '@nestjs/common';
import { CreateFactDto } from './dto/create-fact.dto';

@Injectable()
export class FactsService {
  create(createFactDto: CreateFactDto) {
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

  remove(id: number) {
    return `This action removes a #${id} fact`;
  }
}

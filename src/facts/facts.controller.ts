import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FactsService } from './facts.service';
import { CreateFactDto } from './dto/create-fact.dto';
import { Fact } from './fact.entity';
import { CategoryDto } from './dto/category.dto';

@Controller('facts')
export class FactsController {
  constructor(private readonly factsService: FactsService) {}

  @Post()
  createFact(@Body() createFactDto: CreateFactDto): Promise<Fact> {
    return this.factsService.createFact(createFactDto);
  }

  @Get()
  findAll(): Promise<Fact[]> {
    return this.factsService.findAll();
  }

  @Patch(':id/add-vote')
  addVote(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.factsService.addVote(id, categoryDto);
  }

  @Patch(':id/remove-vote')
  removeVote(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.factsService.removeVote(id, categoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factsService.remove(+id);
  }
}

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

@Controller('facts')
export class FactsController {
  constructor(private readonly factsService: FactsService) {}

  @Post()
  create(@Body() createFactDto: CreateFactDto) {
    return this.factsService.create(createFactDto);
  }

  @Get()
  findAll() {
    return this.factsService.findAll();
  }

  @Patch(':id/add-vote')
  addVote(@Param('id') id: string, @Query('category') category) {
    return this.factsService.addVote(+id, category);
  }

  @Patch(':id/remove-vote')
  removeVote(@Param('id') id: string, @Query('category') category) {
    return this.factsService.removeVote(+id, category);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factsService.remove(+id);
  }
}

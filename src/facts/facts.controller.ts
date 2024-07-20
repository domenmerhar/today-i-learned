import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FactsService } from './facts.service';
import { CreateFactDto } from './dto/create-fact.dto';
import { Fact } from './fact.entity';
import { VoteEnum } from './vote.enum';
import { VoteValidationPipe } from './pipes/vote.validator';

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
  addVote(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('vote', VoteValidationPipe) vote: VoteEnum,
  ) {
    return this.factsService.addVote(id, vote);
  }

  @Patch(':id/remove-vote')
  removeVote(@Param('id') id: string, @Body('vote', VoteValidationPipe) vote) {
    return this.factsService.removeVote(id, vote);
  }

  @Delete(':id')
  removeFact(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
    return this.factsService.removeFact(id);
  }
}

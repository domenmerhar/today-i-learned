import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactsModule } from './facts/facts.module';

@Module({
  imports: [FactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

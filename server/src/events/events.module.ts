import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventsRepository } from './events.repository';
import { Event } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EventsController],
  imports: [TypeOrmModule.forFeature([Event])],
  providers: [EventsService, EventsRepository],
})
export class EventsModule {}

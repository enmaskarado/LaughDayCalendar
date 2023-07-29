import { Module } from '@nestjs/common';
import { CalendarsService } from './calendars.service';
import { CalendarsController } from './calendars.controller';
import { CalendarsRepository } from './calendars.repository';
import { Calendar } from './entities/calendar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CalendarsController],
  providers: [CalendarsService, CalendarsRepository],
  imports: [TypeOrmModule.forFeature([Calendar])],
})
export class CalendarsModule {}

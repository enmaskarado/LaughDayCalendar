import { Inject, Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { CalendarsRepository } from './calendars.repository';

@Injectable()
export class CalendarsService {
  constructor(
    @Inject(CalendarsRepository)
    private calendarRepository: CalendarsRepository,
  ) {}

  async create() {
    return await this.calendarRepository.createCalendar();
  }
}

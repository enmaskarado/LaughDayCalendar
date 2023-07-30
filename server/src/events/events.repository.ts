import { DataSource /* Repository */ } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsRepository {
  constructor(private dataSource: DataSource) {}
  async listEvents(id: string) {
    return await this.dataSource
      .getRepository(Event)
      .createQueryBuilder('event')
      .where('event.idCalendar = :id', {
        id,
      })
      .getMany();
  }
  async createEvent(eventDto: CreateEventDto) {
    const { start_date, end_date, start_time, end_time, idCalendar, rrule } =
      eventDto;

    const event = new Event();
    event.start_date = start_date;
    event.end_date = end_date;

    event.start_time = start_time;
    event.end_time = end_time;

    event.idCalendar = idCalendar;
    event.rrule = rrule;
    return await this.dataSource.getRepository(Event).save(event);
  }
  async updateEvent(id: string, eventDto: UpdateEventDto) {
    const dataToUpdate: QueryDeepPartialEntity<Event> = new Event({
      ...eventDto,
    });
    return await this.dataSource.getRepository(Event).update(id, dataToUpdate);
  }
}

import { DataSource /* Repository */, EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { CreateEventDto, CreateEventsDto } from './dto/create-event.dto';
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
  async createEvents(eventsDto: CreateEventsDto, transaction: EntityManager) {
    const events: QueryDeepPartialEntity<Event>[] = eventsDto.events.map(
      (event) => {
        const newEvent = new Event();
        newEvent.idCalendar = event.idCalendar;
        newEvent.rrule = event.rrule;
        newEvent.start_date = event.start_date;
        newEvent.start_time = event.start_time;
        newEvent.end_date = event.end_date;
        newEvent.end_time = event.end_time;
        return newEvent;
      },
    );
    return await transaction
      .createQueryBuilder()
      .insert()
      .into(Event)
      .values(events)
      .execute();
  }
  async runTransaction<T>(op: (entityManager: EntityManager) => Promise<T>) {
    return this.dataSource.manager.transaction<T>(op);
  }
  async updateEvent(id: string, eventDto: UpdateEventDto) {
    const dataToUpdate: QueryDeepPartialEntity<Event> = new Event({
      ...eventDto,
    });
    return await this.dataSource.getRepository(Event).update(id, dataToUpdate);
  }
}

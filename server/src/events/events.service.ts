import { Inject, Injectable } from '@nestjs/common';
import { CreateEventDto, CreateEventsDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsRepository } from './events.repository';
import { EntityManager } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @Inject(EventsRepository)
    private eventRepository: EventsRepository,
  ) {}

  async createEvent(eventDto: CreateEventDto) {
    // const eventRepeated = await this.eventRepository.findByCode(eventDto.code);

    // if (eventRepeated) {
    //   throw new ConflictException('repeated event');
    // }

    return await this.eventRepository.createEvent(eventDto);
  }

  async createEvents(eventsDto: CreateEventsDto) {
    // const eventRepeated = await this.eventRepository.findByCode(eventDto.code);
    // if (eventRepeated) {
    //   throw new ConflictException('repeated event');
    // }
    const op = async (transaction: EntityManager) => {
      return await this.eventRepository.createEvents(eventsDto, transaction);
    };
    const result = await this.eventRepository.runTransaction(op);
    return result;
  }

  async listEvents(id: string) {
    return await this.eventRepository.listEvents(id);
  }

  async updateEvent(id: string, eventDto: UpdateEventDto) {
    // const event = await this.eventRepository.findById(id);
    // if (!event) {
    //   throw new NotFoundException('Not found event');
    // }
    await this.eventRepository.updateEvent(id, eventDto);
    return { id };
  }
}

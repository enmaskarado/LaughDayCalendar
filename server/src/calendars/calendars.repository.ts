import { DataSource /* Repository */ } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Calendar } from './entities/calendar.entity';
@Injectable()
export class CalendarsRepository {
  constructor(private dataSource: DataSource) {}
  async createCalendar() {
    const calendar = new Calendar();
    return await this.dataSource.getRepository(Calendar).save(calendar);
  }
}

import { DataSource /* Repository */ } from 'typeorm';
import { Injectable } from '@nestjs/common';
@Injectable()
export class EventsRepository {
  constructor(private dataSource: DataSource) {}
}

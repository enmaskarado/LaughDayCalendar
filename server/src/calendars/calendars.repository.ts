import { DataSource /* Repository */ } from 'typeorm';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CalendarsRepository {
  constructor(private dataSource: DataSource) {}
}

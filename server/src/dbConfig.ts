import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Calendar } from './calendars/entities/calendar.entity';
import { Event } from './events/entities/event.entity';
config();
export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Calendar, Event],
  synchronize: true,
});

import { Event } from 'src/events/entities/event.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// schema: process.env.DB_SCHEMA_PARAMETRICAS
@Entity({ name: 'calendars' })
export class Calendar {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;
  @OneToMany(() => Event, (event) => event.calendar)
  events: Event[];

  constructor(data?: Partial<Calendar>) {
    if (data) Object.assign(this, data);
  }
}

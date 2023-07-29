import { Calendar } from 'src/calendars/entities/calendar.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// schema: process.env.DB_SCHEMA_PARAMETRICAS
@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;
  @Column('varchar', {
    name: 'rrule',
    length: 300,
    nullable: false,
  })
  rrule: string;

  @Column({
    name: 'start_date',
    type: 'timestamp without time zone',
    nullable: true,
  })
  start_date: Date;
  @Column({
    name: 'start_time',
    type: 'timestamp without time zone',
    nullable: true,
  })
  start_time: Date;
  @Column({
    name: 'end_date',
    type: 'timestamp without time zone',
    nullable: true,
  })
  end_date: Date;
  @Column({
    name: 'end_time',
    type: 'timestamp without time zone',
    nullable: true,
  })
  end_time: Date;
  @Column({
    name: 'id_calendar',
    type: 'bigint',
    nullable: true,
  })
  idCalendar: string;

  @ManyToOne(() => Calendar, (calendar) => calendar.events, {
    nullable: false,
  })
  @JoinColumn({
    name: 'id_calendar',
    referencedColumnName: 'id',
  })
  calendar: Calendar;
}

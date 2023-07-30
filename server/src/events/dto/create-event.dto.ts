import { IsNotEmpty } from 'class-validator';
export class CreateEventDto {
  @IsNotEmpty()
  start_date: Date;
  @IsNotEmpty()
  end_date: Date;
  @IsNotEmpty()
  start_time: Date;
  @IsNotEmpty()
  end_time: Date;
  @IsNotEmpty()
  idCalendar: string;
  @IsNotEmpty()
  rrule: string;
}

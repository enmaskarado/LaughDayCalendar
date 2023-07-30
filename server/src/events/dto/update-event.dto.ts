import { IsNotEmpty } from 'class-validator';

export class UpdateEventDto {
  @IsNotEmpty()
  start_date: Date;
  @IsNotEmpty()
  end_date: Date;
  @IsNotEmpty()
  start_time: Date;
  @IsNotEmpty()
  end_time: Date;
  @IsNotEmpty()
  rrule: string;
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { CalendarsModule } from './calendars/calendars.module';

@Module({
  imports: [EventsModule, CalendarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { CalendarsModule } from './calendars/calendars.module';
import { dbConfig } from './dbConfig';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EventsModule,
    dbConfig,
    CalendarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

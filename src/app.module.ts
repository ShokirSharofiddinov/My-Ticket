import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { Venue } from './venue/model/venue.model';
import { VenueModule } from './venue/venue.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { Venue_type } from './venue_type/model/venue_type.model';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { Seat_type } from './seat_type/model/seat_type.model';
import { SeatModule } from './seat/seat.module';
import { Seat } from './seat/model/seat.model';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { Venue_photo } from './venue_photo/model/venue_photo.model';
import { HumanCategoryModule } from './human_category/human_category.module';
import { Human_category } from './human_category/model/human_category.model';
import { EventTypeModule } from './event_type/event_type.module';
import { Event_type } from './event_type/model/event_type.model';
import { EventModule } from './event/event.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { Event } from './event/model/event.model';
import { Customer } from './customer/model/customer.model';
import { TicketModule } from './ticket/ticket.module';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/model/booking.model';
import { Ticket } from './ticket/model/ticket.model';
import { CartModule } from './cart/cart.module';
import { CustomerCatdModule } from './customer_catd/customer_card.module';
import { Customer_card } from './customer_catd/model/customer_card.model';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/model/admin.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Venue,
        Venue_type,
        Seat_type,
        Seat,
        Venue_photo,
        Human_category,
        Event_type,
        Event,
        Customer,
        Booking,
        Ticket,
        Customer_card,
        Admin
      ],
      autoLoadModels: true,
      logging: true,
    }),
    VenueModule,
    VenueTypeModule,
    SeatTypeModule,
    SeatModule,
    VenuePhotoModule,
    HumanCategoryModule,
    EventTypeModule,
    EventModule,
    CustomerModule,
    CustomerAddressModule,
    TicketModule,
    BookingModule,
    CartModule,
    CustomerCatdModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

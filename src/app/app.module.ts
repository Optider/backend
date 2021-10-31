import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganisationModule } from '../organisation/organisation.module';
import * as dotenv from 'dotenv';

// Configure dotevn
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.buseu.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    ),
    OrganisationModule,
  ],
})
export class AppModule {}

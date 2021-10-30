import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganisationModule } from 'src/organisation/organisation.module';
import { OrganisationController } from '../organisation/organisation.controller';
import { OrganisationService } from '../organisation/organisation.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:5Dif3A4ruRUc1xfr@cluster0.buseu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    OrganisationModule,
  ],
  controllers: [OrganisationController],
  providers: [OrganisationService],
})
export class AppModule {}

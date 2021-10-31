import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrganisationDto } from './dto/organisation.dto';
import {
  Organisation,
  OrganisationDocument,
} from './schemas/organisation.schema';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectModel(Organisation.name)
    private organisationModel: Model<OrganisationDocument>,
  ) {}

  async getOrganisation(walletId: string): Promise<Organisation> {
    return this.organisationModel.findOne({ walletId: walletId }).exec();
  }
  async getOrganisations(): Promise<Organisation[]> {
    return this.organisationModel.find().exec();
  }
  async createOrganisation(payload: CreateOrganisationDto) {
    const createdOrganisation = new this.organisationModel(payload);
    return createdOrganisation.save();
  }
}

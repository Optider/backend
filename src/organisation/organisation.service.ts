import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateOrganisationDto,
  FindOrganisationDto,
  OrganisationResponseDto,
} from './dto/organisation.dto';
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

  getOrganisation(walletId: string): FindOrganisationDto {
    const tempResponse = new FindOrganisationDto();
    console.log(`one org ${walletId}`);
    return tempResponse;
  }

  getOrganisations(): FindOrganisationDto[] {
    const tempResponse = [new FindOrganisationDto()];
    console.log(`all orgs`);
    return tempResponse;
  }

  createOrganisation(payload: CreateOrganisationDto): Promise<Organisation> {
    const createdOrganisation = new this.organisationModel(payload);
    console.log(`created ${JSON.stringify(payload)}`);
    return createdOrganisation.save();
  }
}

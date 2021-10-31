import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrganisationService } from './organisation.service';

import { CreateOrganisationDto } from './dto/organisation.dto';
import { Organisation } from './schemas/organisation.schema';

@Controller('organisation')
export class OrganisationController {
  constructor(private readonly organisationService: OrganisationService) {}

  // GET viewOrg(walletId) ⇒ all details
  @Get(':walletId')
  async getOrganisation(
    @Param('walletId') walletId: string,
  ): Promise<Organisation> {
    return this.organisationService.getOrganisation(walletId);
  }

  // GET viewOrgs() ⇒ basic details of all orgs
  @Get()
  async getOrganisations(): Promise<Organisation[]> {
    return this.organisationService.getOrganisations();
  }

  // POST createOrg(body orgDetails) ⇒ basic details
  @Post()
  @UsePipes(ValidationPipe)
  async createOrganisation(
    @Body() createOrganisationDto: CreateOrganisationDto,
  ) {
    return this.organisationService.createOrganisation(createOrganisationDto);
  }
}

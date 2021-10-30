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

import {
  CreateOrganisationDto,
  FindOrganisationDto,
  OrganisationResponseDto,
} from './dto/organisation.dto';
import { Organisation } from './schemas/organisation.schema';

@Controller('organisation')
export class OrganisationController {
  constructor(private readonly organisationService: OrganisationService) {}

  // GET viewOrg(walletId) ⇒ all details
  @Get(':walletId')
  getOrganisation(@Param('walletId') walletId: string): FindOrganisationDto {
    return this.organisationService.getOrganisation(walletId);
  }

  // GET viewOrgs() ⇒ basic details of all orgs
  @Get()
  getOrganisations(): FindOrganisationDto[] {
    return this.organisationService.getOrganisations();
  }

  // POST createOrg(body orgDetails) ⇒ basic details
  @Post()
  @UsePipes(ValidationPipe)
  createOrganisation(
    @Body() createOrganisationDto: CreateOrganisationDto,
  ): Promise<Organisation> {
    return this.organisationService.createOrganisation(createOrganisationDto);
  }
}

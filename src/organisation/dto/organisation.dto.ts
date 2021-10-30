import { IsEmail, IsNotEmpty } from 'class-validator';

// Payload for creating organisation
export class CreateOrganisationDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly website: string;

  @IsNotEmpty()
  readonly phone: number;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly tagline: string;

  @IsNotEmpty()
  readonly cause: string;

  @IsNotEmpty()
  readonly imgUrl: string[];

  @IsNotEmpty()
  readonly target: number;

  @IsNotEmpty()
  readonly walletId: string;
}

// Response for viewing organisation
export class FindOrganisationDto {
  id: string; // mongo id

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly website: string;

  @IsNotEmpty()
  readonly phone: number;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly tagline: string;

  @IsNotEmpty()
  readonly cause: string;

  @IsNotEmpty()
  readonly imgUrl: string[];

  @IsNotEmpty()
  readonly target: number;

  @IsNotEmpty()
  readonly walletId: string;
}

// Response after creating organisation
export class OrganisationResponseDto {
  id: string; // mongo id

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly walletId: string;
}

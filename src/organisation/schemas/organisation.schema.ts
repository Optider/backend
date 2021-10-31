import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrganisationDocument = Organisation & Document;

@Schema()
export class Organisation {
  @Prop()
  name: string;

  @Prop()
  website: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  tagline: string;

  @Prop()
  cause: string;

  @Prop([String])
  imgUrl: string[];

  @Prop()
  target: number;

  @Prop()
  walletId: string;
}

export const OrganisationSchema = SchemaFactory.createForClass(Organisation);

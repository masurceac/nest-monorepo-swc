import { InputType } from '@nestjs/graphql';
import { IsOptional, IsString, Length } from 'class-validator';

interface ICat {
  firstName: string;
  lastName: string;
}

@InputType()
export class SaveCatInput implements Pick<ICat, 'firstName' | 'lastName'> {
  @IsString()
  @Length(2, 200)
  firstName: string;

  @IsString()
  @Length(2, 200)
  lastName: string;

  @IsString()
  @IsOptional()
  referral?: string;

  @IsString()
  @IsOptional()
  campaign?: string;
}

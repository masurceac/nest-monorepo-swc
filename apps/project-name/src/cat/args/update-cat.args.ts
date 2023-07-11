import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { UpdateCatInput } from '../inputs/update-cat.input';

@ArgsType()
export class UpdateCatArgs {
  @IsUUID()
  catId: string;

  @ValidateNested()
  @Type(() => UpdateCatInput)
  data: UpdateCatInput;
}

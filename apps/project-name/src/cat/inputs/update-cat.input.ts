import { InputType } from '@nestjs/graphql';
import { SaveCatInput } from './save-cat.input';

@InputType()
export class UpdateCatInput extends SaveCatInput {}

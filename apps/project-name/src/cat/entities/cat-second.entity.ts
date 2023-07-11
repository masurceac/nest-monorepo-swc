import { ObjectType, PickType } from '@nestjs/graphql';
import { CatEntity } from './cat.entity';

@ObjectType()
export class CatSecondEntity extends PickType(CatEntity, ['id'] as const) {}

import { ObjectType } from '@nestjs/graphql';
import { CatEntity } from './cat.entity';

@ObjectType()
export class CatInheritedEntity extends CatEntity {}

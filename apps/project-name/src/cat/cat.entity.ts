import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatEntity {
  id: string;
  name: string;
}

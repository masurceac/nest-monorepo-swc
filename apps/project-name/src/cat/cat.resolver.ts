import { Query, Resolver } from '@nestjs/graphql';
import { CatEntity } from './cat.entity';
import { CatSecondEntity } from './cat-second.entity';

@Resolver(() => CatEntity)
export class CatResolver {
  @Query(() => CatEntity)
  async myFirstPet(): Promise<CatEntity> {
    return {
      id: '0',
      name: 'Meow',
    };
  }

  @Query(() => CatSecondEntity)
  async mySecondPet(): Promise<CatSecondEntity> {
    return {
      id: 'second',
    };
  }
}

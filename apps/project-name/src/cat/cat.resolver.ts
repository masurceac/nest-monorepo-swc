import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatEntity } from './entities/cat.entity';
import { CatSecondEntity } from './entities/cat-second.entity';
import { CatInheritedEntity } from './entities/cat-inherited.entity';
import { UpdateCatArgs } from './args/update-cat.args';
import { Body } from '@nestjs/common';

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

  @Query(() => CatInheritedEntity)
  async myInheritedPet(): Promise<CatInheritedEntity> {
    return {
      id: 'third',
      name: 'Inherited Meow',
    };
  }

  @Mutation(() => CatEntity)
  async udpateCat(
    @Args()
    args: UpdateCatArgs,
  ): Promise<CatEntity> {
    console.log(args.catId); // not validated for UUID
    return {
      id: '0',
      name: 'Meow',
    };
  }
}

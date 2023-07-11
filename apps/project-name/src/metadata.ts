/* eslint-disable */
export default async () => {
  const t = {
    ['./cat/inputs/update-cat.input']: await import(
      './cat/inputs/update-cat.input'
    ),
  };
  return {
    '@nestjs/graphql': {
      models: [
        [
          import('./cat/entities/cat.entity'),
          {
            CatEntity: {
              id: { type: () => String },
              name: { type: () => String },
            },
          },
        ],
        [import('./cat/entities/cat-second.entity'), { CatSecondEntity: {} }],
        [
          import('./cat/entities/cat-inherited.entity'),
          { CatInheritedEntity: {} },
        ],
        [
          import('./cat/inputs/save-cat.input'),
          {
            SaveCatInput: {
              firstName: { type: () => String },
              lastName: { type: () => String },
              referral: { nullable: true, type: () => String },
              campaign: { nullable: true, type: () => String },
            },
          },
        ],
        [import('./cat/inputs/update-cat.input'), { UpdateCatInput: {} }],
        [
          import('./cat/args/update-cat.args'),
          {
            UpdateCatArgs: {
              catId: { type: () => String },
              data: {
                type: () => t['./cat/inputs/update-cat.input'].UpdateCatInput,
              },
            },
          },
        ],
      ],
    },
  };
};

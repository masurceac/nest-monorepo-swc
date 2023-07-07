/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/graphql": { "models": [[import("./cat/cat.entity"), { "CatEntity": { id: { type: () => String }, name: { type: () => String } } }], [import("./cat/cat-second.entity"), { "CatSecondEntity": {} }]] } };
};
import { PluginMetadataGenerator } from '@nestjs/cli/lib/compiler/plugins';
import { ReadonlyVisitor } from '@nestjs/graphql/dist/plugin/visitors/readonly.visitor';
const generator = new PluginMetadataGenerator();

generator.generate({
  visitors: [
    new ReadonlyVisitor({
      introspectComments: true,
      pathToSource: __dirname,
      typeFileNameSuffix: ['.input.ts', '.args.ts', '.entity.ts', '.model.ts'],
      debug: true,
    }),
  ],
  outputDir: __dirname,
  watch: false,
  tsconfigPath: 'tsconfig.build.json',
});

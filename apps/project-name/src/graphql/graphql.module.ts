import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import metadata from '../metadata';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: './schema.graphql',
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
      driver: ApolloDriver,
      persistedQueries: false,
      metadata: metadata,
    }),
  ],
  exports: [GraphQLModule],
})
export class AppGraphqlModule {}

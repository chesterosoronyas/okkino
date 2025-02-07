import { Module, ValidationPipe } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
//import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';

import { APP_PIPE } from '@nestjs/core';

import * as path from 'path';
import { UserModule } from '@okkino/api/feature-user';

const validationProvider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe(),
};
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: path.join(__dirname, './autogenerated-schema.gpl'),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [validationProvider],
})
export class AppModule {}

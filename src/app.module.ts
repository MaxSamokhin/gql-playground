import { CatsModule } from './modules/cats/cats.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
    imports: [
        CatsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/*.graphql']
        })
    ]
})
export class AppModule {}

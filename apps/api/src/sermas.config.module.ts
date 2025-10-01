import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  VippstarApiConfig,
  VippstarDefaultConfig,
} from 'libs/sermas/vippstar.defaults';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.ENV_PATH
        ? [process.env.ENV_PATH]
        : ['.env.production', '.env.staging', '.env.test', '.env'],
      load: [
        (): Partial<VippstarApiConfig> => {
          const defaults: Partial<VippstarApiConfig> = {
            ...VippstarDefaultConfig,
          };
          Object.keys(defaults).forEach((key) => {
            if (process.env[key] !== undefined) {
              delete defaults[key];
            }
          });
          // console.warn(defaults, process.env);
          return defaults;
        },
      ],
    }),
  ],
})
export class SermasConfigModule {}

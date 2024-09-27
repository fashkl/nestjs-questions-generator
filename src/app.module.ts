import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { Modules } from './modules/module';
import { EnvModule } from './modules/common';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    EnvModule,
    Modules,
  ],
})
export class AppModule {}

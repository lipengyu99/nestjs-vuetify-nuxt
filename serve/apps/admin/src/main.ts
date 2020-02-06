import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors()

  // app.useStaticAssets('upload', {
  //   prefix: '/imgupload'
  // })
  const options = new DocumentBuilder()
    .setTitle('后端接口')
    .setDescription('The  API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT = process.env.ADMIN_PORT || 5000
  await app.listen(PORT);
  console.log('http://127.0.0.1:${PORT}/api-docs')
}
bootstrap();

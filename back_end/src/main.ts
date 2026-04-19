import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Habilita metodos CORS para que puedan ser consumidos 


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  });

  app.setGlobalPrefix('api');
// Corro en el puerto 3001 ya que el puerto 3000 es el front 
  await app.listen(3001);
  console.log('Backend corriendo en http://localhost:3001/api');
}

bootstrap();
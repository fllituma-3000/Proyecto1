import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  crear(): string {
    return 'Crea un usuario';
  }

  users(): string {
    return 'Lee lista de usuario';
  }
  
  users15(id: string): string {
    return `Lee usuario -  ${id}`;
  }

  users16(id: string): string {
    return `Actualizar usuariio completo  ${id}`;
  }

  users17(id: string): string {
    return `Actualizar usuario parcial  ${id}`;
  }

  users18(id: string): string {
    return `Eliminar usuario  ${id}`;
  }
}


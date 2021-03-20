import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('profile')
    getProfile(): string {
      return "Subash Cat";
    }
}

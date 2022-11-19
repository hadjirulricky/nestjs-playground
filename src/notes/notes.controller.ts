import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { AddNoteDto } from './dto';
import { NotesService } from './notes.service';

@UseGuards(AuthGuard)
@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  async add(@Req() request: Request, @Body() addNoteDto: AddNoteDto) {
    const userId: string = request.headers.userId?.toString() ?? '';
    return await this.notesService.add(userId, addNoteDto);
  }
}

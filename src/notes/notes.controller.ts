import { Body, Controller, Post } from '@nestjs/common';
import { AddNoteDto } from './dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  async add(@Body() addNoteDto: AddNoteDto) {
    return await this.notesService.add(addNoteDto);
  }
}

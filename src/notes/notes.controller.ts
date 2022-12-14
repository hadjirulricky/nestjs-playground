import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { AddNoteDto, UpdateNoteDto } from './dto';
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

  @Delete(':id')
  async delete(@Req() request: Request, @Param('id') id: string) {
    const userId: string = request.headers.userId?.toString() ?? '';
    return await this.notesService.delete(userId, id);
  }

  @Put(':id')
  async update(
    @Req() request: Request,
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    const userId: string = request.headers.userId?.toString() ?? '';
    return await this.notesService.update(userId, id, updateNoteDto);
  }

  @Get()
  async get(@Req() request: Request) {
    const userId: string = request.headers.userId?.toString() ?? '';
    return await this.notesService.get(userId);
  }
}

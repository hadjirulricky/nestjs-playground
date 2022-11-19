import { BadRequestException, Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import { AddNoteDto, NoteDto } from './dto';

@Injectable()
export class NotesService {
  constructor(private firestoreService: FirestoreService) {}

  async add(addNoteDto: AddNoteDto) {
    const result = await this.firestoreService.add('notes', {
      title: addNoteDto.title,
      note: addNoteDto.note,
    });

    if (result) {
      return new NoteDto(result.id, addNoteDto.title, addNoteDto.note);
    } else {
      throw new BadRequestException();
    }
  }
}

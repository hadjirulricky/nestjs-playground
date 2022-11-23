import { BadRequestException, Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import { AddNoteDto, NoteDto, UpdateNoteDto } from './dto';

@Injectable()
export class NotesService {
  constructor(private firestoreService: FirestoreService) {}

  async add(userId: string, addNoteDto: AddNoteDto) {
    const result = await this.firestoreService.add('notes', {
      title: addNoteDto.title,
      note: addNoteDto.note,
      user: { id: userId },
    });

    if (result) {
      return { message: 'Note added successfully.' };
    } else {
      throw new BadRequestException();
    }
  }

  async delete(userId: string, noteId: string) {
    const result = await this.firestoreService.delete(userId, 'notes', noteId);

    if (result) {
      return { message: 'Note deleted successfully.' };
    } else {
      throw new BadRequestException();
    }
  }

  async update(userId: string, noteId: string, updateNoteDto: UpdateNoteDto) {
    const result = await this.firestoreService.update(
      userId,
      'notes',
      noteId,
      updateNoteDto,
    );

    if (result) {
      return { message: 'Note updated successfully.' };
    } else {
      throw new BadRequestException();
    }
  }

  async get(userId: string) {
    const result = await this.firestoreService.get(userId, 'notes');

    if (result) {
      const data = result.map((doc) => {
        return new NoteDto(doc.id, doc.data()['title'], doc.data()['note']);
      });
      return { data: data };
    } else {
      throw new BadRequestException();
    }
  }
}

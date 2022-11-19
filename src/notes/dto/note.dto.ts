export class NoteDto {
  id: string;
  title: string;
  note: string;

  constructor(id: string, title: string, note: string) {
    this.id = id;
    this.title = title;
    this.note = note;
  }
}

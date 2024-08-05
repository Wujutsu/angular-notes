import { Injectable } from '@angular/core';
import { Note } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [
    {id:1, title:'Note1', content:'blabla'},
    {id:2, title:'Note2', content:'werwerwer'},
    {id:3, title:'Note3', content:'jwerji wjerj jwer jnwer '},
  ];

  constructor() { }

  getNotes() {
    return this.notes;
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => id !== note.id);
  }
}

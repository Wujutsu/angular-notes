import { Component, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {
  title: string = '';
  body: string = '';

  constructor(private noteService: NoteService) { }

  addNote() {
    const newNote = { id: Date.now(), title: this.title, body: this.body };
    this.noteService.addNote(newNote);
    this.title = '';
    this.body = '';
  }
}

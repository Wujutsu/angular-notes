import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrl: './list-note.component.scss'
})
export class ListNoteComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    })
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.notes = this.notes.filter(note => id !== note.id);
    })
  }

  onNoteAdded(newNote: Note) {
    this.notes.push(newNote);
  }
}

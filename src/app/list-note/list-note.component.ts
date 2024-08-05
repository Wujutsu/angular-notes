import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrl: './list-note.component.scss'
})
export class ListNoteComponent implements OnInit {
  notes!: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
    this.notes = this.noteService.getNotes();
  }
}

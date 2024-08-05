import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {
  noteForm: FormGroup;
  @Output() noteAdded = new EventEmitter<Note>();

  constructor(private fb: FormBuilder, private noteService: NoteService) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  addNote() {
    if (this.noteForm.valid) {
      const newNote = { id: Date.now(), ...this.noteForm.value };
      this.noteService.addNote(newNote).subscribe(note => {
        this.noteForm.reset();
        this.noteAdded.emit(note);
      })
    }
  }
}

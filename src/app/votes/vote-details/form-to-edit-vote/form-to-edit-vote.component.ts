import {Component, Input, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IVote} from '../../../models/vote-interface';

@Component({
  selector: 'app-form-to-edit-vote',
  templateUrl: './form-to-edit-vote.component.html',
  styleUrls: ['./form-to-edit-vote.component.scss']
})
export class FormToEditVoteComponent implements OnInit {
  @Input() currentVote: IVote;
  editingForm: FormGroup;
  options: FormArray;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.editingForm = this.fb.group({
      name: [this.currentVote.name, Validators.required],
      description: [this.currentVote.description],
      options: this.fb.array([ this.createNewOption() ]),
    });
  }

  onEdit(editFormData): void {
    this.currentVote.name = editFormData.name;
    this.currentVote.description = editFormData.description;
    this.currentVote.options = editFormData.options;
  }

  createNewOption(): FormGroup {
    return this.fb.group({
      option: ['', Validators.required],
    });
  }

  addNewOption(): void {
    this.options = this.editingForm.get('options') as FormArray;
    this.currentVote.options.push('new option');
  }

  deleteOption(event, option): void {
    this.currentVote.options.splice(this.currentVote.options.indexOf(option), 1) ;
  }
}

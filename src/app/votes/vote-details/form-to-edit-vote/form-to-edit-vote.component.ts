import {Component, Input, OnInit} from '@angular/core';
import {FormArray, AbstractControl, FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {IVote} from '../../../models/vote-interface';
import {VoteDetailsService} from '../vote-details.service';

@Component({
  selector: 'app-form-to-edit-vote',
  templateUrl: './form-to-edit-vote.component.html',
  styleUrls: ['./form-to-edit-vote.component.scss']
})
export class FormToEditVoteComponent implements OnInit {
  @Input() currentVote: IVote;
  editingForm: FormGroup;

  constructor(public fb: FormBuilder, private voteService: VoteDetailsService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.editingForm = new FormGroup({
      name: new FormControl(this.currentVote.name, [
        Validators.required]),
      description: new FormControl(this.currentVote.description),
      options: new FormArray([
        new FormControl(this.currentVote.options)
      ])
    });
  }

  addNewOption() {
    this.currentVote.options.push('new option');
  }
  deleteOption(option) {
    this.currentVote.options.splice(this.currentVote.options.indexOf(option), 1);
  }

  get name()  {
    return this.editingForm.get('name');
  }
  get description()  {
    return this.editingForm.get('description');
  }
  get options(): AbstractControl {
    return this.editingForm.get('options') as FormArray;
  }

  onEdit(editFormData, vote): void {
    if (this.editingForm.invalid) {
      return;
    } else {
      this.voteService.editVote(editFormData, vote);
    }
  }
}

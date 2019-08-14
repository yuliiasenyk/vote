import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IVote} from '../../models/vote-interface';
import { FormBuilder, Validators, FormArray, FormGroup  } from '@angular/forms';
import { VOTES } from 'src/app/mockes-data/votes';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.scss']
})

export class VoteDetailsComponent implements OnInit, OnChanges {
  @Input() currentVote: IVote;
  editFieldOpen: boolean;
  editButton: 'Edit' | 'Cancel';
  editingForm: FormGroup;
  votingForm: FormGroup;
  options: FormArray;
  public votes: IVote[];

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.editFieldOpen = false;
    this.editButton = 'Edit';
    this.votes = VOTES;
    this. votingForm = this.fb.group({
      currentVote: ['currentVote.options[0]']
    })

    this.editingForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      options: this.fb.array([ this.createItem() ]),
    });
  }
  editVote() {
    this.editFieldOpen = !this.editFieldOpen;
    if (this.editButton === 'Edit') {this.editButton = 'Cancel'} else {this.editButton = 'Edit'};
  }
  createItem(): FormGroup {
    return this.fb.group({
      option: ''
    });
  }
  addNewOption(): void {
   this.options = this.editingForm.get('options') as FormArray;
    this.currentVote.options.push('');
    console.log('new option input should be added');
  }

  onVote() {
    console.log(`you voted for ${this.votingForm.value}`);
  }

  onEdit(editFormData) {
    console.log(`form is saved`);
    this.currentVote.name = editFormData.name;
    this.currentVote.description = editFormData.description;
    this.currentVote.options = editFormData.options;
  }

  ngOnChanges(): void {
    console.log('Votes details', this.currentVote);

  }
  seeResults(): void {
    console.log('Votes results', this.currentVote);
  }
  //   addNewOption(): void {
  //   console.log('new option input should be added');
  // }
  deleteOption(event, option): void {
    console.log(`option ${this.currentVote.options.indexOf(option)} is deleted`);
    this.currentVote.options.splice(this.currentVote.options.indexOf(option), 1) ;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {IVote} from '../../models/vote-interface';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { VOTES } from 'src/app/mockes-data/votes';
import {VoteDetailsService} from './vote-details.service';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.scss'],
  providers: [VoteDetailsService],
})

export class VoteDetailsComponent implements OnInit {
  @Input() currentVote: IVote;
  editFieldOpen: boolean;
  editButton: 'Edit' | 'Cancel';
  editingForm: FormGroup;
  votingForm: FormGroup;
  options: FormArray;
  choice: string;
  public votes: IVote[];

  constructor(public fb: FormBuilder, private editVoteService: VoteDetailsService) { }

  ngOnInit() {
    this.editFieldOpen = false;
    this.editButton = 'Edit';
    this.votes = VOTES;

    this. votingForm = this.fb.group({
      currentVote: ['']
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
  }

  changeOption(event: any) {
    this.choice = event.target.value;
  }
  onVote() {
    console.log(this.choice);
  }

  onEdit(editFormData) {
    this.currentVote.name = editFormData.name;
    this.currentVote.description = editFormData.description;
    this.currentVote.options = editFormData.options;
  }
  deleteOption(event, option): void {
    this.currentVote.options.splice(this.currentVote.options.indexOf(option), 1) ;
  }
  showResults(){
    this.editVoteService.calculateResults();
  }
}

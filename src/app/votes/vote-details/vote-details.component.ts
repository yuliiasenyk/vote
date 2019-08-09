import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IVote} from '../../models/vote-interface';
import { FormBuilder, Validators, FormGroup   } from '@angular/forms';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.scss']
})
export class VoteDetailsComponent implements OnInit, OnChanges {
  // voteForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  // });
  // constructor(private fb: FormBuilder) { }


  @Input() currentVote: IVote;
  ngOnInit() {}

  ngOnChanges(): void {
    console.log('Votes details', this.currentVote);
  }
  seeResults(): void {
    console.log('Votes results', this.currentVote);
  }
   addNewOption(): void {
   console.log('new option input should be added');
 }

}

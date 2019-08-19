import {Component, Input, OnInit} from '@angular/core';
import {IVote} from '../../../models/vote-interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-to-vote',
  templateUrl: './form-to-vote.component.html',
  styleUrls: ['./form-to-vote.component.scss']
})
export class FormToVoteComponent implements OnInit {
  @Input() currentVote: IVote;
  choice: string;
  votingForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this. votingForm = this.fb.group({
    currentVote: ['']
  });
  }
  changeOption(event: any): void {
    this.choice = event.target.value;
  }
  onVote(): void {
    console.log(this.choice);
  }

  generateAnonymous(): void {}
  useCurrentAccount(): void {}
}

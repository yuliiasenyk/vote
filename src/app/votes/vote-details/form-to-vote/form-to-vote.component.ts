import {Component, Input, OnInit} from '@angular/core';
import {IVote, VoteState} from '../../../models/vote-interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-to-vote',
  templateUrl: './form-to-vote.component.html',
  styleUrls: ['./form-to-vote.component.scss']
})
export class FormToVoteComponent implements OnInit {
  @Input() currentVote: IVote;
  public choice: string;
  public voteState = VoteState;
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
    this.currentVote.description = `you have selected ${this.choice}`;
  }

  generateAnonymous(): void {}
  useCurrentAccount(): void {}
}

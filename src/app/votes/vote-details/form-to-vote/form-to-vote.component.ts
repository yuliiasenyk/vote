import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {IVote, VoteState} from '../../../models/vote-interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {VoteDetailsService} from '../vote-details.service';
import {UsersService} from '../../../users/users.service';
import {VotesService} from '../../votes.service';

@Component({
  selector: 'app-form-to-vote',
  templateUrl: './form-to-vote.component.html',
  styleUrls: ['./form-to-vote.component.scss']
})
export class FormToVoteComponent implements OnInit, OnChanges {
  @Input() currentVote: IVote;
  public choice: string;
  public voteState = VoteState;
  public loggedInUser: string;
  public alreadyParticipated: boolean;
  public participationMessage: string;
  votingForm: FormGroup;


  constructor(public fb: FormBuilder,
              private voteService: VoteDetailsService,
              private votesService: VotesService,
              private userService: UsersService) {}

  public getLoggedInUser() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('ACCESS_TOKEN')).username;
  }

  ngOnChanges() {
    this.votesService.behaviorSubjectToCheckParticipation.subscribe(v => {
      this.alreadyParticipated = v;
      this.participationMessage = 'You have already participated in this vote';
    });
  }

  ngOnInit() {
    this.getLoggedInUser();
    this. votingForm = this.fb.group({
    currentVote: ['']
  });
  }

  changeOption(event: any): void {
    this.choice = event.target.value;
  }

  onVote(vote): void {
    const body = {participatedVote: vote, user: this.loggedInUser, choice: this.choice};
    console.log(body);
    this.voteService.addNewResult(body).subscribe(result => console.log('vote results from db', result));
    this.userService.participate(body).subscribe(result => console.log('new user stats after vote', result));
    this.alreadyParticipated = true;
  }

  generateAnonymous(): void {}
}

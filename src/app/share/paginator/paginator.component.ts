import { Component, OnInit, Input, } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

 public page: number;
 public hiddenLast: boolean;

  constructor() {}
  ngOnInit() {
    this.page = 1; this.hiddenLast = true;}

}

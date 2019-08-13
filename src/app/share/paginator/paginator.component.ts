import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IPage } from 'src/app/models/page-interface';
const MAX_BUTTON_NUMBER = 4;

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<number>();
  @Input() pageData: IPage;
  public initialPage: number;
  public arrayOfPageNumbers: number[];

  ngOnInit() {
    this.initialPage = 1;
    this.createButtonArray();
  }

  pageClicked(page: number): void {
    this.pageSelected.emit(page);
  }

  createButtonArray() {
    this.arrayOfPageNumbers = [];
    const pageNumbers = MAX_BUTTON_NUMBER < this.pageData.totalPages ? MAX_BUTTON_NUMBER : this.pageData.totalPages;
    const offset = Math.floor(pageNumbers/2);
    let startIndex = this.pageData.page - offset;


    if (startIndex < this.initialPage) {
      startIndex = this.initialPage;
    }
    if (this.pageData.page > this.pageData.totalPages - offset) {
      startIndex = this.pageData.totalPages - pageNumbers + 1;
    }

    for (let i = 0; i < pageNumbers; i++) {
      this.arrayOfPageNumbers.push(startIndex + i);
    }
  }
}

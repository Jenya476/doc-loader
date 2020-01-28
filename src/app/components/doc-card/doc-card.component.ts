import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocService} from '../../services/doc/doc.service';
import {Doc, DocFilter} from '../../models/doc.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.sass']
})
export class DocCardComponent implements OnInit, OnDestroy {

  tabs: DocFilter[] = ['all', 'validation', 'incorporation', 'launch', 'fundraising'];
  activeTab = 0;
  docs: Doc[] = [];
  private ngUnsubscribe = new Subject();
  constructor(public docService: DocService) {
    this.docService.getDocs$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(docs => {
        this.docs = docs;
      });
  }

  ngOnInit() {
  }

  changeFilter(tabIndex: number) {
    this.docService.changeFilter(this.tabs[tabIndex]);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

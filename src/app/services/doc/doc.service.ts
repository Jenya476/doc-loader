import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Doc, DocFilter} from '../../models/doc.model';
import {delay, switchMap, tap} from 'rxjs/operators';
import {State} from '../../models/commons.model';
import {UtilsService} from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  docFilter$ = new BehaviorSubject<DocFilter>('all');
  state: State = 'Loading';
  mockData = this.getMocData();
  constructor(private utilsService: UtilsService) { }

  getDocs$(): Observable<Doc[]> {
    return this.docFilter$
      .pipe(
        switchMap(filter => {
          this.state = 'Loading';
          if (filter === 'all') {
            return of(this.mockData);
          } else {
            return of(this.mockData.filter(doc => doc.filter === filter));
          }
        }),
        delay(300),
        tap(docs => {
          this.state = this.utilsService.getDataState(docs);
        })
      );
  }

  changeFilter(filter: DocFilter) {
    this.docFilter$.next(filter);
  }

  getMocData(): Doc[] {
    const docs: Doc[] = [];
    const filters: DocFilter[] = ['validation', 'incorporation', 'launch', 'fundraising'];
    for (let i = 1; i < 11; i++) {
      const doc: Doc = {
        title: `Doc ${i}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, perferendis, quos.Nostrum omnis quasi' +
          'quidem ullam velit. Eaque exercitationem facilis illo minima modi nemo nostrum placeat quia quod rem, voluptatibus.',
        completion: i * 10,
        link: 'https://google.com',
        status: 'pending',
        docType: 'CR Document',
        isLock: i % 2 === 0,
        filter: filters[Math.floor(Math.random() * filters.length)]
      };
      docs.push(doc);
    }
    return docs;
  }
}

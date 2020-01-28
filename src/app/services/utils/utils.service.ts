import {Injectable} from '@angular/core';
import {State} from '../../models/commons.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {}

  public getDataState(target: any[] | any): State {
    if (Array.isArray(target)) {
      return (target && target.length) ? 'Data' : 'Empty';
    } else {
      return target ? 'Data' : 'Empty';
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Doc} from '../../models/doc.model';

@Component({
  selector: 'app-doc-item',
  templateUrl: './doc-item.component.html',
  styleUrls: ['./doc-item.component.sass']
})
export class DocItemComponent implements OnInit {

  @Input() doc?: Doc;

  constructor() { }

  ngOnInit() {
  }

}

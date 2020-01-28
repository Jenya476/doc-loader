import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {

  @Input() tabs: string[] = [];
  @Input() activeTab = 0;
  @Output() activeTabChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onTabChange(index: number) {
    this.activeTabChange.emit(index);
  }

}

/**
 *@Input listName  <array>标签数组
 * @Input @Output  actionName <string>
 */

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { slideToggle } from '../../my-animations/few-animations'

@Component({
  selector: 'app-slidetoggle',
  templateUrl: './slidetoggle.component.html',
  styleUrls: ['./slidetoggle.component.scss'],
  animations:[ slideToggle ]
})
export class SlidetoggleComponent implements OnInit {

  @Input() actionName: string;
  @Input() listName: string;
  @Output() actionNameChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  // 点击罩层消失
  slideDown(): void {
    this.actionName = 'inactive';
    this.actionNameChange.emit(this.actionName);
  }
}

import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';
import { layerToggle } from '../../my-animations/few-animations'

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss'],
  animations:[ layerToggle ]
})
export class LayerComponent implements OnInit {

  @Input() actionName: string;
  @Input() waringName: string;
  @Output() actionNameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // 点击罩层消失
  slideDown(): void {
    this.actionName = 'inactive';
    this.actionNameChange.emit(this.actionName);
  }

}

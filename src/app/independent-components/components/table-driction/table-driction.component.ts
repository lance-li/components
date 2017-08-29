/**
 * @Input tableName  <array>标签数组
 * @Output positionCode  <number>传出点击标签位置
 */
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-driction',
  templateUrl: './table-driction.component.html',
  styleUrls: ['./table-driction.component.scss']
})
export class TableDrictionComponent implements OnInit {

  @Input() tableName: string[];
  @Input() tableStyle = new Array(); // 样式属性
  @Output() positionCode = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.getPLenth();
  }

  private currentStyles = {};

  public setCurrentStylesM(): any {
    this.currentStyles = {
      'line-height': this.tableStyle['lineHeight'] ? this.tableStyle['lineHeight'] : '1.5rem',
      'font-size': this.tableStyle['fontSize'] ? this.tableStyle['fontSize'] : '0.35rem',
      'color': this.tableStyle['color'] ? this.tableStyle['color'] : '#000',
    };
    return this.currentStyles
  }
  // 底部横线的长度
  public PLenth: any;

  getPLenth(): number {
    this.PLenth = (1 / this.tableName.length * 100).toFixed(2) ;
    return this.PLenth
  }

  public position: any;
  getPosition($event,positionI:number):void {
    this.position = $event.target.offsetLeft;
     this.positionCode.emit(positionI);
     // console.log(positionI)
  }
}

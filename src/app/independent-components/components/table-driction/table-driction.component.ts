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

  @Input()  tableName:string[];
  @Output() positionCode = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.getPLenth();
  }

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


import { Component, OnInit , EventEmitter, HostListener, Input, Output } from '@angular/core';
import { slideToggle } from '../../my-animations/few-animations'



@Component({
  selector: 'app-time-select',
  templateUrl: './time-select.component.html',
  styleUrls: ['./time-select.component.scss'],
  animations: [ slideToggle ]
})
export class TimeSelectComponent implements OnInit {

  @Input() actionName: string;
  @Input() dateNum : number;
  @Output() selectedValue = new EventEmitter<any>();
  @Output() actionNameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.getTimeList(this.currentYear,this.currentMonth,this.dateNum);

  }

  // 点击罩层消失
  public slideDown(): void {
    this.actionName = 'inactive';
    this.actionNameChange.emit(this.actionName);
  }

  // 时间集合

  public timeGroup = [
    "09:00", "09:30",
    "10:00", "10:30",
    "11:00", "11:30",
    "12:00", "12:30",
    "13:00", "13:30",
    "14:00", "14:30",
    "15:00", "15:30",
    "16:00", "16:30",
    "17:00", "17:30",
  ];
  // 日历有关的参数
  private  currentDate: Date = new Date();
  private currentYear: number = this.currentDate.getFullYear();
  private currentMonth: number = this.currentDate.getMonth();
  private currentDay: number = this.currentDate.getDate();
  private mynum = this.currentDate.getDay();
  public daysArr: any[];
  private weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

  // 获取某个月的天数
  private _getDaysEachMonth(year: number, month: number): number {
    const $month = month + 1;
    let daysEachMonth: number;
    if ($month === 2) {
      (!(year % 400) || (!(year % 4) && (year % 100))) ? daysEachMonth = 29 : daysEachMonth = 28;
    }else {
      ($month === 4 || $month === 6 || $month === 9 || $month === 11) ? daysEachMonth = 30 : daysEachMonth = 31;
    }
    // console.log(daysEachMonth);
    return daysEachMonth;
  }

  // 星期的增加
  private dayAdd():number{
    if (this.mynum < 6) {
      this.mynum = this.mynum +1;
    }else {
      this.mynum = 0;
    }
    return this.mynum
  }

  // 判断月份是否小于10

  private fillZero(num: number): number {
    let $num;
    if (num < 10) {
      $num = "0" + num;
    } else {
      $num = num;
    }
    return $num
  }


  private getTimeList(year: number, month: number,dateNum:number): void {
    let currentMonthDays = this._getDaysEachMonth(year, month);
    let daysArr = new  Array(dateNum);
    let $year = year;
    let $month = month + 1;
    for (let i = 0; i < dateNum; i++ ) {
        if ( currentMonthDays >= this.currentDay) {
          daysArr[i] = {
            date: this.fillZero($month)+ "月" + this.fillZero(this.currentDay) + "日",
            week: this.weekday[this.mynum]
          };
          this.currentDay = this.currentDay +1;
          this.dayAdd();
        } else {
          if($month < 12) {
            currentMonthDays = this._getDaysEachMonth($year, $month );
            this.currentDay = 1;
            $month = $month + 1;
          }else {
           let month = -1;
            $year = $year + 1;
            currentMonthDays = this._getDaysEachMonth($year, month = month + 1);
            this.currentDay = 1;
            $month = 1;
          }
          daysArr[i] = {
            date: this.fillZero($month) + "月" + this.fillZero(this.currentDay) + "日",
            week: this.weekday[this.mynum]
          };
          this.currentDay = this.currentDay + 1;
          this.dayAdd();
        }
    }
    this.daysArr = daysArr;
    this.dateValue = this.daysArr[0];
    this.groupValue = {
      date: this.dateValue.date,
      week: this.dateValue.week,
      time: this.timeValue
    };
    this.selectedValue.emit(this.groupValue);
  }



  // 月份效果函数
  public translateTouchMY: number = 84;
  private currentStyles={};

  public setCurrentStylesM(): any {
    let translateContent = "translate(0px," + this.translateTouchMY + "px" + ")";
    this.currentStyles = {
      'transform': translateContent,
      'transition': this.animatB ?  'all .5s':'none'
    };
    return this.currentStyles
  }

  private animatB: boolean;
  public getAnimatB(animat:boolean) {
     this.animatB = animat;
  }

  public getTranslateTouchMY(translateTouchY: number) {
    this.translateTouchMY = translateTouchY;
  }
   // 时间效果函数
  public translateTouchTY: number = 84;
  public setCurrentStylesT(): any {
    let translateContent = "translate(0px," + this.translateTouchTY + "px" + ")";
    this.currentStyles = {
      'transform': translateContent,
      'transition': this.animatTB ?  'all .5s':'none'
    };
    return this.currentStyles
  }

  private animatTB: boolean;
  public getAnimatTB(animat:boolean) {
    this.animatTB = animat;
  }
  public getTranslateTouchTY(translateTouchY: number) {
    this.translateTouchTY = translateTouchY;
  }


  // 获得日期值
  private dateValue: any = {};

  public getDateValue(dateValue: number) {
    this.dateValue = this.daysArr[Math.round(-dateValue)];
    //console.log(this.dateValue.date);
    // console.log(this.daysArr[Math.round(-dateValue)])
  }

  // 获得时间值
  private timeValue = this.timeGroup[0];

  public getTimeValue(timeValue: number) {
    this.timeValue = this.timeGroup[Math.round(-timeValue)];
    // console.log(this.timeGroup[Math.round(-timeValue)])
  }

  // 最终选择时间数组
  private groupValue = { };

  // 确定选择时间上传
  public confirmValue():void {
    this.groupValue = {
      date: this.dateValue.date,
      week: this.dateValue.week,
      time: this.timeValue
    };
    this.selectedValue.emit(this.groupValue);
    this.slideDown();
  }
}

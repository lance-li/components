import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public tableName = ['普通登录','验证码快捷登录','手机登录'];
  public tableStyle = {
    lineHeight: "1rem",
    fontSize : "0.35rem",
    color: "#000",
  };
  public listName = ['list1','list2'];
  getPositionCode(code:number):void{
    // console.log(code)
  }


  // 弹出层属性
  public actionName: string = 'inactive';


  slideUp():void {
    this.actionName = 'active';
  }

  // 时间选择弹框
  public timeActionName:string = 'inactive';
  timeSlideUp():void {
    this.timeActionName = 'active';
  }
  // 时间选择值
  public timeValue: any;
  public getTimeValue (value : any){
   this.timeValue = value;
     console.log(value);
  }

  public layerActionName: string = 'inactive';
  public waringName: string='确定删除吗？';
  layerSlideUp():void {
    this.layerActionName = 'active';
  }
}

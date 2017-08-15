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
  public listName = ['list1','list2'];
  getPositionCode(code:number):void{
    // console.log(code)
  }
  // 弹出层属性
  public actionName: string = 'inactive';

  slideUp():void {
    this.actionName = 'active';
  }
}

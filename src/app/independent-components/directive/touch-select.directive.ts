import { Directive , ElementRef, HostListener,EventEmitter, Input,Output} from '@angular/core';

@Directive({
  selector: '[myTouchSelect]'
})
export class TouchSelectDirective {
  @Input()  public dataLenth: number;
  @Input()  public translateTouchY: number;
  @Output() public translateYChange = new EventEmitter<number>();
  @Output() public animatB = new EventEmitter<boolean>();
  @Output() public timeValue = new EventEmitter<number>();
  constructor(private el: ElementRef) { }

  // 停止滑动
  private stop(e) {
    //Opera/Chrome/FF
    if (e.preventDefault)
      e.preventDefault();
    //IE
    e.returnValue = false;
  }

  // 判断是否触摸 并且获取触摸数量
  private checkTouch(e) {
    let touchAction;
    if (e.touches) {
      touchAction = e.targetTouches[0]
    } else {
      touchAction = e;
    }
    return touchAction ;
  }

  private changeTouch(e) {
    let touchAction;
    if (e.touches) {
      touchAction = e.changedTouches[0]
    } else {
      touchAction = e;
    }
    return touchAction ;
  }
  // //触摸起始
  private firstTouchX: number;
  private firstTouchY: number;
  private translateTouch: number;
  private sTime: number;
  @HostListener('touchstart', ['$event'])
  public moveStart(event) {
    // console.log(1);
    this.stop(event);
    if(!this.canStart){
      return
    }
    this.firstTouchX = this.checkTouch(event).pageX;
    this.firstTouchY = this.checkTouch(event).pageY;
    this.translateTouch = this.translateTouchY;
    this.lastY =  this.firstTouchY;
    this.sTime = new Date().getTime();
    if(!this.canMove && this.canEnd){
      return false
    }
    this.canStart = false;
    this.canMove = false;
    this.stopInertiaMove = true;
    /*console.log(this.canStart );*/
  }
  // 触摸移动
  private secondTouchX: number;
  private secondTouchY: number= null;
  private mTime: number;
  private lastY: number;
  private canEnd: boolean = false;
  private canMove: boolean = false;
  private canStart: boolean = true;
  @HostListener('touchmove', ['$event'])
  public onMoving(event) {
    this.stop(event);
    this.secondTouchX = this.checkTouch(event).pageX;
    this.secondTouchY = this.checkTouch(event).pageY;
    let drt = this.GetSlideDirection(this.firstTouchX,this.firstTouchY,this.secondTouchX,this.secondTouchY);
    if ((drt == 1 || drt == 2) && !this.canStart){
      this.translateTouchY = this.translateTouch + (this.secondTouchY - this.firstTouchY);
      this.translateYChange.emit(this.translateTouchY);
      this.timeValue.emit((this.translateTouchY-this.eMHight*2)/this.eMHight);
      this.animatB.emit(false);
      this.canEnd = true;
      this.canMove = true;
      this.stopInertiaMove = true;
    }
    this.mTime = new Date().getTime();
    this.checkLastTime();
  }

  // 得到最后的时间和位置
  private  checkLastTime() {
    if(this.mTime - this.sTime > 300) {
      this.sTime = this.mTime;
      this.lastY = this.secondTouchY;
    }
  }

  // 触摸结束
  private endTouchX: number;
  private endTouchY: number;
  private maxY: number;
  private minY: number;
  private nowY: number;
  private eTime: number;
  private speed: number;
  private stopInertiaMove: boolean = false;
  private eMHight: number;
  @HostListener('touchend', ['$event'])
  public moveEnd (event) {
    this.stop(event);
    this.endTouchX = this.changeTouch(event).pageX;
    this.endTouchY = this.changeTouch(event).pageY;
    let  eTHight = document.querySelector('.G-top').clientHeight;
    this.eMHight = document.querySelector('.G-mid').clientHeight;
    this.maxY = eTHight ;
    this.minY = -(this.dataLenth-3)* this.eMHight;
    if (this.canEnd) {
      this.canMove = false;
      this.canEnd = false;
      this.canStart = true;
      this.translateTouchY = this.translateTouch + (this.secondTouchY - this.firstTouchY);
      this.nowY = this.endTouchY;
      if (this.translateTouchY > this.maxY) {
        this.translateYChange.emit(this.maxY);
        this.timeValue.emit((this.maxY-this.eMHight*2)/this.eMHight);
        this.animatB.emit(true);
      } else if (this.translateTouchY < this.minY) {
        this.translateYChange.emit(this.minY);
        this.timeValue.emit((this.minY-this.eMHight*2)/this.eMHight);
        this.animatB.emit(true);
      }else {
        this.eTime = new Date().getTime();
        this.speed = ((this.nowY - this.lastY) / (this.eTime - this.sTime));
        this.stopInertiaMove = false;
        this.speedMove(this.speed, this.eTime, this.translateTouchY, this.eMHight);
      }
    }
  }

  private dir: number;
  private deceleration: number;
  private speedMove(speed: number, startTime: number, contentY: number,eMHight: number): void {
    this.dir = speed > 0 ? -1 : 1;
    //加速度方向
    this.deceleration = this.dir * 0.001;  // 0.001 为减速时间
    // let abc = setTimeout(alert(this.dir),10);
    this.inertiaMove();

  }

  private timers: any;
  public inertiaMove(){
    if (this.stopInertiaMove)
      return;
    let nowTime: number = new Date().getTime();
    let t : number = nowTime - this.eTime;
    let nowV : number= this.speed + t *  this.deceleration;
    let moveY: number = (this.speed + nowV) / 2 * t;
    let moveCy:number = ( this.translateTouchY + moveY);
    // console.log(moveCy);
    // console.log(this.dir * nowV );
    if (this.dir * nowV > 0) {
      // clearTimeout(this.timers);
      if (moveCy > this.maxY) {
        this.translateYChange.emit(this.maxY);
        this.timeValue.emit((this.maxY-this.eMHight*2)/this.eMHight);
        this.animatB.emit(true);
      } else if (moveCy < this.minY) {
        this.translateYChange.emit(this.minY);
        this.timeValue.emit((this.minY-this.eMHight*2)/this.eMHight);
        this.animatB.emit(true);
      } else {
        let MC = Math.round(moveCy /  this.eMHight);
        if (MC > 2) {
          MC = 2
        } else if (MC < -(this.dataLenth - 3)) {
          MC = -(this.dataLenth - 3)
        }
        this.translateYChange.emit( this.eMHight * MC);
        this.timeValue.emit((this.eMHight * MC-this.eMHight*2)/this.eMHight);
        this.animatB.emit(true);
      }
      return
    } else if (moveCy > (this.maxY )) {
      this.translateYChange.emit(this.maxY);
      this.timeValue.emit((this.maxY-this.eMHight*2)/this.eMHight);
      this.animatB.emit(true);
      return
    } else if (moveCy < (this.minY )) {
      this.translateYChange.emit(this.minY);
      this.timeValue.emit((this.minY-this.eMHight*2)/this.eMHight);
      this.animatB.emit(true);
      return
    } else {
       //console.log(moveCy);
       this.translateYChange.emit(moveCy);
      this.timeValue.emit((moveCy-this.eMHight*2)/this.eMHight);
       this.animatB.emit(false);
      this.timers = setTimeout(() => {
        this.inertiaMove()
      }, 10);
    }
  }



  // 判断角度
  private GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
  };

  // 判读手指滑动方向
  private GetSlideDirection(startX,startY,endX,endY):number {
    let dy = startY - endY;
    let dx = endX - startX;
    let result = 0;
    // 如果滑动距离太短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
      return result;
    }
    let angle = this.GetSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
      result = 4;//右
    } else if (angle >= 45 && angle < 135) {
      result = 1;//上
    } else if (angle >= -135 && angle < -45) {
      result = 2;//下
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3;//左
    }
    return result;
  };
}

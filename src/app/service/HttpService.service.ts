/**
 * Created by Administrator on 2017/8/7.
 */
import {Injectable}    from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


const $headers = new Headers({ //放入不同的组件
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
  'content-type': 'application/json'
});

const $options = new RequestOptions({headers: $headers});

@Injectable()
export class DataService {

  constructor(private http: Http) { }


  $get(url: string, headers = $options): Observable<any> {
    return this.http.get(url, headers)
      .map(
        (res: Response) => {
          let result = res.json();
          return result;
        }
      )
      .catch(this.handleError);
  }
  $post(url: string, params: any, options = $options): Observable<any> {
    return this.http.post(url, params, options)
      .map(
        (res: Response )=> {
            let result = res.json();
            return result;
        })
      .catch(this.handleError);
  }


  $put(url: string, params: any, options = $options): Observable<any> {
    return this.http.put(url, params, options)
      .map((res:Response)=>{
        let result = res.json();
        return result;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

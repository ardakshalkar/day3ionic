import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestProvider {
	apiURL = "http://localhost/restmockup/listcountries.php";
  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }
	getStudents(){
		return this.http.get(this.apiURL).map(this.extractData);
	}

	
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}

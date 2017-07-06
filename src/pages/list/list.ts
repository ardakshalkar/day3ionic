import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
	loading: any;
  items: Array<{name: string, surname:string}>;
	items_m: Observable<Array<{name: string, surname:string}>>;
  constructor(public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
    //this.rest.getStudents().subscribe( (data) => this.items = data);
		this.loading = this.loadingCtrl.create({
	    content: 'Please wait...'
	  });

	  this.loading.present();
  }
	ionViewDidLoad(){
		this.rest.getStudents().subscribe((data) => {
			this.loading.dismiss();
			this.items = data;
		});
	}
}

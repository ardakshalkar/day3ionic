import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the InstagramPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class InstagramPage {

  newsfeed: string[];
  constructor(public navCtrl: NavController,public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.rest.getNewsFeed(0).subscribe((data)=>{
          this.newsfeed = data;
       }
     );
  }
  doInfinite(infiniteScroll){
    console.log("Infinite scroll!!!");
    this.rest.getNewsFeed(1).subscribe((data)=>{
          //this.newsfeed = data;
          this.newsfeed = this.newsfeed.concat(data);
       }
    );
  }
}

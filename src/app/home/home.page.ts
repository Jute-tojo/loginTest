import { Component } from '@angular/core';
import {Facebook ,FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fb:Facebook) {}

facebook(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));


   this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
}

}

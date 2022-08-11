import { Component } from '@angular/core';
import {Facebook ,FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nom: string = "";

  constructor(private fb:Facebook, private googlePlus: GooglePlus, private alertController: AlertController) {}

  
facebook(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!'+ JSON.stringify(res)))
  .catch(e => console.log('Error logging into Facebook', e));


   //this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
}

google(){
  this.googlePlus.login({
  })
  .then(
    res => {
      console.log("GOOGLE = "+ JSON.stringify(res));    
      this.nom = res.displayName;    
      this.presentAlert("SUCCESS");
    }      
    )
  .catch(err => {
    console.error("GOOGLE ERREUR = "+err);
    this.presentAlert("TSY METY E");
  });
}

async presentAlert(msg: string) {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: msg,
    message: 'This is an alert!',
    buttons: ['OK'],
  });

  await alert.present();
}

}

import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { AuthenticationService } from '../../app/services/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 
  loading: any;

  model: any = {};
 
  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private authenticationService: AuthenticationService) {
 
  }

  register() {
      this.loading = true;
      this.authenticationService.register(this.model.email, this.model.password)
          .subscribe(
              data => {
                  console.log('success');
              },
              error => {
                  console.log(error);
              });
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.email, this.model.password)
          .subscribe(
              data => {
                  console.log('success');
              },
              error => {
                  console.log(error);
              });
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loading.present();
 
  }
 
}
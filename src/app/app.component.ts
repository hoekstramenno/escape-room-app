import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from './services/api/core/api.service';
import { environment } from '../environments/environment';
import { UserService } from './services/api/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private api: ApiService,
    public userService: UserService,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.api.setup(environment).then(() => {});

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.platform.pause.subscribe(this.onPause.bind(this));
      window.addEventListener('blur', this.onPause.bind(this));
      window.addEventListener('beforeunload', this.onPause.bind(this));

      this.platform.resume.subscribe(this.onResume.bind(this));
      window.addEventListener('focus', this.onResume.bind(this));
    });
  }

  protected async onPause() {
    console.log('BackgroundService: APP PAUSE');
    if (!this.userService.initialized) {
      return;
    }
    if (!this.userService.lastActiveAt) {
      this.userService.setLastActiveAt();
    }
  }

  protected async onResume() {
    console.log('BackgroundService: APP RESUME');
    if (!this.userService.initialized) {
      return;
    }
    const shouldEnterPin = await this.userService.shouldEnterPin();
    if (this.userService.user.id && shouldEnterPin) {
      this.router.navigate(['/auth/enter-pin'], {
        queryParams: {return: this.router.url + location.search},
        replaceUrl: true,
      });
      return false;
    } else {
      await this.userService.resetLastActiveAt();
    }
  }
}

import { User } from './../../model/user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.user = this.userService.getUser(params.get('userId'));
    });
  }

  async onDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Are your Sure?',
      message: 'Do you want to really delete this user?',
      buttons: [
        {
          text: 'No, I changed my mind',
          role: 'cancel',
        },
        {
          text: 'Yes, Please go ahead',
          handler: () => {
            this.userService.deleteUser(this.user.id);
            this.router.navigate(['/users']);
          },
        },
      ],
    });
    alert.present();
  }
}

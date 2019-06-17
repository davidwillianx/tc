import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();

  /**
   * @param dragulaService service that controls drag and drop events
   * @param alertControler  service that controls alert calls
   */
  constructor(
    private dragulaService: DragulaService,
    private alertControler: AlertController,
    private router: Router
  ) {

    dragulaService.createGroup('gameElements', {});

    this.subscription.add(
      dragulaService.drop('gameElements')
        .subscribe(() => {
          this.showSuccessMessage();
        })
    );
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public async showSuccessMessage() {
    const successDrop = await this.alertControler.create({
      header: 'Congratz!',
      message: 'You complete this mission!',
      buttons: [
        {
          text: 'Reset',
          handler: () => { }
        },
        {
          text: 'Next',
          handler: () => {
            this.router.navigateByUrl('/game/level/second');
          }
        }

      ]
    });

    successDrop.present();
  }

}

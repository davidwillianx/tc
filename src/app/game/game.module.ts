import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DragulaModule } from 'ng2-dragula';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [
    GameComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    DragulaModule.forRoot(),
    GameRoutingModule
  ]
})
export class GameModule { }

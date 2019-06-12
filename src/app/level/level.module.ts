import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DragulaModule } from 'ng2-dragula';

import { FirstComponent } from './first/first.component';
import { LevelRoutingModule } from './level-routing.module';
import { LevelComponent } from './level.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    LevelRoutingModule,
    DragulaModule.forRoot()
  ],
  declarations: [
    LevelComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
})
export class LevelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './level.component';
import { LevelRoutingModule } from './level-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LevelComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    LevelRoutingModule
  ]
})
export class LevelModule { }

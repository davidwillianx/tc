import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

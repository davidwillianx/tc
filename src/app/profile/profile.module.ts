import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule { }

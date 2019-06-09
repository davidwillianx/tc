import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    children: [
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfileModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutModule'
      },
      {
        path: 'level',
        loadChildren: '../level/level.module#LevelModule'
      },
      {
        path: '',
        redirectTo: '/game/profile',
        pathMatch: 'full'
      }
    ]
    // children: [
    //   {
    //     path: 'about',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: '../about/about.module#AboutModule'
    //       }
    //     ]
    //   },
    //   {
    //     path: 'level',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: '../level/level.module#LevelModule'
    //       }
    //     ]
    //   },
    //   {
    //     path: 'profile',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: '../profile/profile.module#ProfileModule'
    //       }
    //     ]
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/game/profile',
    //     pathMatch: 'full'
    //   }
    // ]
  },
  {
    path: '',
    redirectTo: '/game/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

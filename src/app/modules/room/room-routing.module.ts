import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomSetUpComponent } from './room-set-up/room-set-up.component';
import { RoomComponent } from './room.component';

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    children: [
      {
        path: 'set-up/:id',
        component: RoomSetUpComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}

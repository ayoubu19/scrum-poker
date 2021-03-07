import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeComponent } from './home.component';
import { JoinRoomComponent } from './join-room/join-room.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CreateRoomComponent,
      },
      {
        path: 'create-room',
        component: CreateRoomComponent,
      },
      {
        path: 'join-room/:id',
        component: JoinRoomComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

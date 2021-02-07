import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoomComponent } from './modules/home/create-room/create-room.component';
import { HomeComponent } from './modules/home/home.component';
import { JoinRoomComponent } from './modules/home/join-room/join-room.component';

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
        path: 'join-room',
        component: JoinRoomComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

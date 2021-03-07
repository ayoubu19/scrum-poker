import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JoinRoomComponent } from './join-room/join-room.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, CreateRoomComponent, JoinRoomComponent],
})
export class HomeModule {}

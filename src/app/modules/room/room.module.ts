import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomRoutingModule } from './room-routing.module';
import { RoomSetUpComponent } from './room-set-up/room-set-up.component';
import { RoomComponent } from './room.component';

@NgModule({
  imports: [CommonModule, SharedModule, RoomRoutingModule],
  declarations: [RoomComponent, RoomSetUpComponent],
})
export class RoomModule {}

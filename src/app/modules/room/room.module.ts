import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';

@NgModule({
  imports: [CommonModule, SharedModule, RoomRoutingModule],
  declarations: [RoomComponent],
})
export class RoomModule {}

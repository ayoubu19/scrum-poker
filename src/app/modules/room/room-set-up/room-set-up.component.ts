import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-set-up',
  templateUrl: './room-set-up.component.html',
  styleUrls: ['./room-set-up.component.scss'],
})
export class RoomSetUpComponent implements OnInit {
  greeting: string;
  roomId: string;
  currentIndex = 0;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setRoomId();
    console.log(this.roomId);
    this.getRoomById(this.roomId);
  }

  setRoomId() {
    this.roomId = this.route.snapshot.paramMap.get('id');
  }

  getRoomById(roomId: string) {
    this.roomService
      .getRoomById(roomId)
      .valueChanges()
      .subscribe((room) => {
        this.greeting = `Hi ${room.moderator} ! You are The Moderator`;
        console.log(room);
      });
  }

  onIndexChange(currentIndex) {
    this.currentIndex = currentIndex;
  }
}

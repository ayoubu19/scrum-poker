import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss'],
})
export class CreateRoomComponent implements OnInit {
  validateForm!: FormGroup;
  listOfOption: Array<{ label: string; value: string }> = [
    {
      label: 'Fibbonacci (0,1,2,3,5, ... )',
      value: 'Fibbonacci',
    },
    {
      label: 'Normal (0,1,2,3,4, ... ) (coming soon)',
      value: 'Normal',
    },
  ];
  room: Room = {};

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setUpForm();
  }

  setUpForm(): void {
    this.validateForm = this.fb.group({
      hostName: [null, [Validators.required]],
      roomTitle: [null, [Validators.required]],
      voteMode: [this.listOfOption[0].value],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.status === 'VALID') {
      this.room.moderator = this.validateForm.value.hostName;
      this.room.roomTitle = this.validateForm.value.roomTitle;
      this.room.voteMode = this.validateForm.value.voteMode;
      this.roomService.createRoom(this.room).subscribe((room) => {
        console.log(room.path.pieces_[1]);
        this.router.navigate(['/room/set-up', room.path.pieces_[1]]);
      });
    } else {
      console.log('invalid');
    }
  }
}

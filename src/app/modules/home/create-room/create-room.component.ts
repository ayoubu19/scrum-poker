import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      label: 'Normal (0,1,2,3,4, ... )',
      value: 'Normal',
    },
    {
      label: 'Normal (0,1,2,3,4, ... )',
      value: 'Normal2',
    },
    {
      label: 'Normal (0,1,2,3,4, ... )',
      value: 'Normal3',
    },
  ];

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      roomTitle: [null, [Validators.required]],
      mode: [this.listOfOption[0].value],
    });
  }
}

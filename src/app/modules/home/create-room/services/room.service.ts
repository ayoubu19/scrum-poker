import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

import { Room } from 'src/app/models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private dbPath = '/rooms';

  roomsRef: AngularFireList<Room>;

  constructor(db: AngularFireDatabase) {
    this.roomsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Room> {
    return this.roomsRef;
  }

  createRoom(room: Room): Observable<any> {
    return from(this.roomsRef.push(room));
  }
}
